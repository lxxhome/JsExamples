// // good
// const errorMessage = `This is a super long error that was thrown because of Batman.
//  When you stop to think about how Batman had anything to do with this, you would get nowhere fast.`;

//  const short=function longUniqueMoreDescriptiveLexicalFoo() {}


//立即调用函数表达式 (IIFE)
(function () {
    console.log('Welcome to the Internet. Please follow me.');
}());

(function () {
    console.log("hi,welcome here.")
}());

let foo;
if (true) {
    foo = function () {
        return 'first';
    }
} else {
    foo = function () {
        return 'second';
    }
}
foo();


let test;
if (currentUser) {
  test=()=> {
    console.log('Yup.');
  }
}


