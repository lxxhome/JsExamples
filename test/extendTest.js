const extend = require('extend');
let path=require('path');

let main =  {BRANDS: ['ONLY', 'JACKJONES', 'VEROMODA', 'SELECTED', 'JLINDEBERG', 'NAMEIT', 'BESTSELLER']}
let extendArgsConfig = {
    PORT: 3002,   //命令行参数传来的端口号
    BRAND: 'ONLY', //命令行参数传来的品牌号
    NODE_ENV: 'dev' //命令行参数传来的ENV
}
let development={
//文件资源根目录
    Static_File_Path: "/opt/gfs/source",
    //REDIS配置
    redisStore: {

        //登录凭证
        Token: {
            host: '10.150.27.54',
            port: 6381,
            password: 'LINGZHIappcan1',
            database: 1,
        },

        //登录凭证(老接口)
        Sid: {
            host: '10.150.27.54',
            port: 6381,
            password: 'LINGZHIappcan1',
            db: 2,
        },

        //销售信息
        Sales: {
            host: '10.150.27.54',
            port: 6379,
            password: 'appcan.cn',
            database: 2,

        },
    },

    // vhost配置
    vhost: {
        'koa.ec': 'ec',
        'koa.demo': 'demo'
    }
}
extend(main,extendArgsConfig,development);
if (main.extend) {
    const extPath = path.resolve(main.extend);
    try {
        // 深复制
        extend(true, main, require(extPath));
    } catch (err) {
        throw `Load Extend Config Error：${extPath}`;
    }
}
console.log(main);
