// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const _ = require('lodash');
const Stat = require('../model/stat/stat');

class GetStatScoreUseCase
{
  constructor (logicPoints,logicActions) {
    this.logicPoints = logicPoints;
    this.logicActions = logicActions;
  }
  execute (params,next) {
    const self = this;
    let stats = [];
    _.each(self.logicActions[params.action],function (stat) {
      stats.push(new Stat(
        params.userid,
        stat,
        self.logicPoints[params.action]
      ));
    });
    next && next(stats);
  }
}

module.exports = GetStatScoreUseCase;
