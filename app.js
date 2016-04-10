// Created by Isra San Jose Gonzalez
// @aidify 19/03/2016

'use strict'

const config = require('./config');
const Logger = require('./interface/logger');

let logger = new Logger(config.logging);

// Broker bootstrap
const Broker = require('./messagebroker/broker');
const GetStatScoreUseCase = require('./usecase/getstatscore');

let getStatScoreUseCase = new GetStatScoreUseCase(config.points,config.actions);

new Broker(config.messagebroker,logger,getStatScoreUseCase);

// Healthcheck server
const Server = require('./restapi/server');

new Server(logger, config.api);