// console.log(`argv:${process.argv.slice(2)}`)
// console.log(`agrc:${process.argv}`)



const devApps = [

    //1.ONLY
    {
        //应用名
        name: 'shop-only-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3001 --brand=ONLY',

        //日志信息 log_date_format: "YYYY-MM-DD HH:mm", 错误日志输出路径
        error_file: "/data/Log/shop-only-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-only-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-only-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3001,
            BRAND: 'ONLY'
        }
    },

    //2.杰克琼斯
    {
        //应用名
        name: 'shop-jackjones-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3002 --brand=JACKJONES',

        //日志信息 log_date_format: "YYYY-MM-DD HH:mm", 错误日志输出路径
        error_file: "/data/Log/shop-jackjones-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-jackjones-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-jackjones-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3002,
            BRAND: 'JACKJONES'
        }
    },

    //3.VERO MODA
    {
        //应用名
        name: 'shop-veromoda-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3003 --brand=VEROMODA',

        //日志信息 log_date_format: "YYYY-MM-DD HH:mm", 错误日志输出路径
        error_file: "/data/Log/shop-veromoda-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-veromoda-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-veromoda-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3003,
            BRAND: 'VEROMODA'
        }
    },

    //4.思莱德
    {
        //应用名
        name: 'shop-selected-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3004 --brand=SELECTED',

        //日志信息 log_date_format: "YYYY-MM-DD HH:mm", 错误日志输出路径
        error_file: "/data/Log/shop-selected-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-selected-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-selected-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3004,
            BRAND: 'SELECTED'
        }
    },

    //5.金林德伯格
    {
        //应用名
        name: 'shop-jlindeberg-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3005 --brand=JLINDEBERG',

        //日志信息 log_date_format: "YYYY-MM-DD HH:mm", 错误日志输出路径
        error_file: "/data/Log/shop-jlindeberg-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-jlindeberg-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-jlindeberg-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3005,
            BRAND: 'JLINDEBERG'
        }
    },

    //6.nameit童装
    {
        //应用名
        name: 'shop-nameit-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3006 --brand=NAMEIT',

        //日志信息
        //log_date_format: "YYYY-MM-DD HH:mm",

        //错误日志输出路径
        error_file: "/data/Log/shop-nameit-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-nameit-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-nameit-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3006,
            BRAND: 'NAMEIT'
        }
    },

    //7.联合官网
    {
        //应用名
        name: 'shop-best-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3007 --brand=BESTSELLER',

        //日志信息
        //log_date_format: "YYYY-MM-DD HH:mm",

        //错误日志输出路径
        error_file: "/data/Log/shop-best-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-best-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-best-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3007,
            BRAND: 'BESTSELLER'
        }
    },

    //8.旧货网站
    {
        //应用名
        name: 'shop-fol-dev',

        //入口js
        script: 'bin/server.js',

        //命令行参数
        args: '--env=development --port=3008 --brand=FOL',

        //日志信息
        //log_date_format: "YYYY-MM-DD HH:mm",

        //错误日志输出路径
        error_file: "/data/Log/shop-fol-err.log",

        //一般日志输出路径
        out_file: "/data/Log/shop-fol-out.log",

        //测试环境 pm2 start ecosystem.config.js --only shop-fol-dev --env development
        env_development: {
            NODE_ENV: 'development',
            PORT: 3008,
            BRAND: 'FOL'
        }
    }
]


let REG = /^--[a-zA-Z0-9]+\=[a-zA-Z0-9]+$/;
let result = {};
let args=devApps[0].argv;




// let args = devApps[0].argv.map(function (item) {
//     if (!REG.test(item)) {
//         return
//     }
//
//     let arr = item.split('=');
//     let key = arr[0].slice(2);
//
//     result[key] = arr[1];
// })

console.log(args);