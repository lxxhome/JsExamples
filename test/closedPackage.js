// function init(){
//     var name="Mozilla",
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }

// init();

// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   console.log(add10(2)); // 12

function a(){
  var i=0;
  function b(){
  console.log(++i);
  }
  return b;
  }
  var c=a();
  c();