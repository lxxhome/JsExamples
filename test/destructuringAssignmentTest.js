let body = {
    msg: 'ok',
    data: {
        accessToken: '14343434',
    },
};
let accessToken = '3434343090';
// 一定要用一对小括号包裹解构赋值语句，JS引擎将一对开放的大括号视为一个代码块，而语法规定，代码块语句不允许出现在赋值语句左边
({ accessToken } = body.data); 
console.log(accessToken);
