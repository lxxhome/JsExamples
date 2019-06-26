// Js的delete属性用于删除对象的某个属性。

// 任何使用 var 声明的属性不能从全局作用域或函数的作用域中删除。
// 这样的话，delete操作不能删除任何在全局作用域中的函数（无论这个函数是来自于函数声明或函数表达式）
// 除了在全局作用域中的函数不能被删除，在对象(object)中的函数是能够用delete操作删除的。
// 任何用let或const声明的属性不能够从它被声明的作用域中删除。
let testStr = 'this is a test string';
console.log(delete testStr); // false

// 当一个属性被设置为不可设置，delete操作将不会有任何效果，并且会返回false。
// 在严格模式下会抛出语法错误（SyntaxError）。
var Employee = {};
Object.defineProperty(Employee, 'name', { configurable: false });
console.log(delete Employee.name);  // false

// Object.getOwnPropertyDescriptor('testStr');

// 在全局作用域创建adminName属性（没有用let和var定义)
adminName = 'xyz';
delete adminName; // true

//delete 和原型链
function Foo() {
    this.bar = 10;
}

Foo.prototype.bar = 42;

var foo = new Foo();

console.log(foo.bar);
// 返回 true，因为删除的是 foo 对象的自身属性
delete foo.bar;

// foo.bar 仍然可用，因为它在原型链上可用。
console.log(foo.bar);

// 从原型上删除属性
delete Foo.prototype.bar;

// 输出 "undefined"，因为不能继承这个属性了
console.log(foo.bar);


//   当你删除一个数组元素时，数组的长度不受影响。即便你删除了数组的最后一个元素也是如此。
//   当用 delete 操作符删除一个数组元素时，被删除的元素已经不再属于该数组。
var trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
if (3 in trees) {
    // 这里不会执行
    console.log(trees)
}


// 如果你想让一个数组元素继续存在但是其值是 undefined，那么可以使用将 undefined 
// 赋值给这个元素而不是使用 delete。下面的例子中，trees[3] 被赋值为 undefined，但该元素仍然存在。
var trees = ["redwood","bay","cedar","oak","maple"];
trees[3] = undefined;
if (3 in trees) {
   // 这里会被执行
}


// 如果你想通过改变数组的内容来移除一个数组元素，请使用splice方法。在下面的例子中，通过使用splice，将trees[3]从数组中移除。
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees.splice(3,1);
console.log(trees); // ["redwood", "bay", "cedar", "maple"]