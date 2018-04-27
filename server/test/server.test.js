/* eslint-disable */

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Get issues list', () => {
  describe('/issues', () => {
	  it('it should return a list issues', (done) => {
			chai.request(server)
		    .get('/api/issues')
		    .end((err, res) => {
          res.should.have.status(200);

		      done();
		    });
	  });
  });
});
