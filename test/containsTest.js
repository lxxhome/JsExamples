Array.prototype.contains = function(item){
    return RegExp("\\b"+item+"\\b").test(this);
  };
  var arr = [];
  for (var i = 10; i < 15; i++) {
    arr.push({'name':'test','num':i});
  }
  console.log(arr.contains(4)); //false
  console.log(arr.contains(14)); //true