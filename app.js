// Created by Isra San Jose Gonzalez
// @aidify 19/03/2016

'use strict'

const config = require('./config');
const Logger = require('./interface/logger');

const Broker = require('./messagebroker/broker');

const GetStatScoreUseCase = require('./usecase/getstatscore');

let logger = new Logger(config.logging);

let getStatScoreUseCase = new GetStatScoreUseCase(config.points,config.actions);

new Broker(config.messagebroker,logger,getStatScoreUseCase);
