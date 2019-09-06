// Node.js代码与操作系统交互过程

//例如：打开一个文件，并进行一些操作
let fs=require('fs');
fs.open('./test.txt','w',function(err,fd){
    // do something
})

//  上述代码的调用过程大致可描述为：lib/fs.js-->src/node_file.cc-->uv_fs
