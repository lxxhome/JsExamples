let text='𠮷';
console.log(text.length);
console.log(text.codePointAt(0));
console.log(/^.$/.test(text));
console.log('x'.repeat(3));


let text1="hello1 hello2 hello3",
   pattern=/hello\d\s?/,
   result=pattern.exec(text1);

   console.log(result[0]);