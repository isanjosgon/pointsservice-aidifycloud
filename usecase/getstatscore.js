// Created by Isra San Jose Gonzalez
// @aidify 24/03/2016

'use strict'

const _ = require('lodash');
const Stat = require('../model/stat/stat');

class GetStatScoreUseCase
{
  constructor (logicPoints, logicActions) {
    this.logicPoints = logicPoints;
    this.logicActions = logicActions;
  }
  execute (params,next) {
	const self = this;
    let stats = [];
    _.each(this.logicActions[params.type + '-' + params.action], function(stat) {
      stats.push(new Stat(
        params.user,
        stat,
        self.logicPoints[params.type + '-' + params.action]
      ));
    });
	params['points'] = this.logicPoints[params.type + '-' + params.action];
    next && next(null, params, stats);
  }
}

module.exports = GetStatScoreUseCase;
