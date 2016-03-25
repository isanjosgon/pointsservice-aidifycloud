// Created by Isra San Jose Gonzalez
// @aidify 25/03/2016

'use strict'

const should = require('should');
const GetStatScoreUseCase = require('../usecase/getstatscore');

const points = {
  "commit" : 100,
  "pull-request-rejected" : -200
};
const actions = {
  "commit" : [
    "reputation",
    "impact"
  ],
  "pull-request-rejected" : [
    "reputation",
    "buggy"
  ]
};

describe('getStatScoreUseCase',function () {

  it('should respond with two stat points [reputation,buggy]',function (done) {
    let getStatScoreUseCase = new GetStatScoreUseCase(points,actions);
    getStatScoreUseCase.execute({ userid : '123', action : 'commit' },function (res) {
      res.should.have.length(2);
      res.should.is.a.Array();
      let stat = res[0];
      stat.should.have.property('userid').which.is.a.String();
      (stat.userid).should.be.exactly('123');
      stat.should.have.property('stat').which.is.a.String();
      (stat.stat).should.be.exactly('reputation');
      stat.should.have.property('points').which.is.a.Number();
      (stat.points).should.be.exactly(100);
      done();
    });
  });

});
