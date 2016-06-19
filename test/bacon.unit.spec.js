var Bacon = require('baconjs')

describe('bacon tests', ()=>{
   it('bacon repeat test', (done)=>{
     var stream = Bacon.repeat(function(i) {
        if (i < 130) {
         var stream = Bacon.once(i);
         stream.onValue((value)=>{
          // console.log(`value - ${value}`);
         })
         return stream;

        } else {
         return false;
        }
      }).log('new event in my stream');

      Bacon.fromArray([1,2,3,4,5,6,7]).flatMap((value)=>{
        console.log('flatMap->value:' + value);
        return Bacon.once(value)}).log();


      var util  = require('util');
      var _ = require('lodash');
      //console.log(util.format('%j', stream));
      //console.log(`stream ${_.keysIn(stream)} is observable ${stream._isObservable}`);
      stream.log()
      stream.onValue((value)=>{
        console.log(`repeat stream value ${value}`);
      })
      stream.doAction(()=>{console.log('doing action')});
      stream.onEnd(()=>{
        done();
      })
   })
});
