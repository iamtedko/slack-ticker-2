var request = require('supertest');
var chai = require('chai');
var app = require('../app');

describe('Ticker API', function() {
  describe('GET /ticker', function() {
    it('send a summary of BTC price to slack', function(done) {
      process.env.SLACK_HOST = "bitsblocks.slack.com";
      process.env.SLACK_PATH = "/services/hooks/incoming-webhook";
      process.env.SLACK_TOKEN = "oAZCA0Kk8SakSyE2XnN7ysxd";

      request(app)
      .get('/ticker')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        done();
      });
    });
  });
});
