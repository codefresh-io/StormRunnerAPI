var request = require('superagent')
var assert = require('assert');
var StormAPI = require('../api');
assert(StormAPI);

describe('strom tests', (done)=>{
var TENANTID = 293752468;
var user = {
  "name": "nurit.guthrie@hpe.com",
  "password": "Alon&Boaz64"
}
  var ctx = {};
  var api;

it.only('login->runTest->waitForStatus', (done)=>{

     var api = new StormAPI(user.name, user.password);

     api.login().then(api.runTest.bind(api, 10), done).then(api.getStatus.bind(api, -1)).then(()=>{
       console.log('completed')
       done();

     }, done);

  });


})
