// Created by Isra San Jose Gonzalez
// @aidify 19/03/2016

'use strict'

const log4js = require('log4js');

class Logger
{
  constructor (config) {
    log4js.configure(config);
    this.loggerinfo = log4js.getLogger('info');
    this.loggererror = log4js.getLogger('error');
    this.loggerdebug = log4js.getLogger('debug');
  }
  log (text) {
    console.log(text);
    this.loggerinfo.info(text);
  }
  error (err) {
    this.loggererror.info(err);
  }
  debug (text) {
    this.loggerdebug.info(text);
  }
}

module.exports = Logger;
