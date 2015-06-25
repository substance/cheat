# Promises

Call cb and return promise

```js
function mylazyfunc(input) {
  var promise = new Promise();

  fs.openFile(function(err, data) {
    if (err) promise.reject(err);
    promise.resolve(data);
  });
  return promise;
}
```
