// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const _ = require('lodash');
const redis = require('redis');

class Broker
{
  constructor (config,logger,getstatscore) {
    if (config.host) {
      this.client_sub = redis.createClient(config.port,config.host);
      this.client_sub.auth(config.auth);
      this.client_pub = redis.createClient(config.port,config.host);
      this.client_pub.auth(config.auth);
    } else {
      this.client_sub = redis.createClient();
      this.client_pub = redis.createClient();
    }
    this.client_sub.subscribe('SERVICE:POINTSSERVICE');
    this.client_sub.on('message',function (channel,message) {
      let service = channel.split(':')[1];
      let action = message.split(':')[0];
      if (service == 'POINTSSERVICE' && action === 'SET_POINTS') {
        logger && logger.log('request MESSAGE : ' + message);
        getstatscore.execute(JSON.parse(message.split(':')[1]),function (scores) {
          _.each(scores,function (stat) {
            logger && logger.log('publish to SERVICE:STATSMANAGEMENT:' + JSON.stringify(stat));
            client_pub.publish('SERVICE:STATSMANAGEMENT',JSON.stringify(stat));
          });
        });
      }
    });
  }
}

module.exports = Broker;
