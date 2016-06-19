// including plugins
var gulp = require('gulp')

var StormAPI = require('./api');
// task
gulp.task('storm', function (done) {
  var user = {
    "name": "nurit.guthrie@hpe.com" || process.env.StormUser,
    "password": "Alon&Boaz64"|| process.env.StormPwd
  }
    var ctx = {};
    var api = new StormAPI(user.name, user.password);

     api.login().then(api.runTest.bind(api, 10), done).then(api.getStatus.bind(api, -1)).then(()=>{
         console.log('completed')
         done();

       }, done);
});
