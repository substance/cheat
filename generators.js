// returns 5
function five(cb) {
  setTimeout(function() {
    cb(null, 5);
  }, 200);
}

function seven(cb) {
  setTimeout(function() {
    cb(null, 7);
  }, 600);
}

function* sum(resume, ctx) { 
  res = yield five(resume);
  console.log('resFive', res);
  seven(resume);
  var res2 = yield;
  console.log('resSeven', res2);
  return res + res2;
}

function run(gen, ctx, cb) {
  function resume(err, result) {
    if (err) { 
      gen.throw(err);
    } else {
      var res = gen.next(result);
      if (res.done) {
        cb(null, res.value);
      }
    }
  }
  gen = gen(resume, ctx);
  return gen.next();
}

var res = run(sum, { a: 'b' }, function(err, result) {
  console.log('result', result);
});
console.log('early?', res);
