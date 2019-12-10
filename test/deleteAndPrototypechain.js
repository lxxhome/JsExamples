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