// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const config = require('../package.json');
const logicPoints = require('./points.json')['points'];
const logicActions = require('./points.json')['actions'];
const env = require('node-env-file');
let file = process.env.NODE_ENV || 'dev';
env(__dirname + '/.' + file);

module.exports = {
  environment : process.env.NODE_ENV || 'dev',
  api: {
	port: process.env.PORT
  },
  messagebroker : {
    host : process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    auth : process.env.REDIS_PASSWORD
  },
  points : logicPoints,
  actions : logicActions,
  logging : {
    appenders: [{
      type: 'file',
      filename: 'logs/error.log',
      category: 'error',
      maxLogSize: 20480,
      backups: 10
    },{
      type: 'file',
      filename: 'logs/info.log',
      category: 'info',
      maxLogSize: 20480,
      backups: 10
    },{
      type: 'file',
      filename: 'logs/debug.log',
      category: 'debug',
      maxLogSize: 20480,
      backups: 10
    }]
  }
}
