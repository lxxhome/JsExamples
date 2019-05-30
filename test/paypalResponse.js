const MEAP = require('meap');

function run(Param, Robot, Request, Response, IF) {

    //从路径中获取参数
    var brandCode = Param.baas.brand;
    var router = Param.baas.router;

    var interface_conf = JAVA_PAY_RESP.interface[router];

    if (!interface_conf) {
        Response.statusCode = 500;
        Response.end(JSON.stringify({status: -1, msg: '接口参数有误'}));
        return
    }

    //请求体中的数据
    var requestBody = {};
    if(Param){
        requestBody = Param.body ? (Buffer.isBuffer(Param.body) ? JSON.parse(Param.body.toString()): Param.body) //raw-data
            : Param.fields; //form-data、x-www-urlencoded
    }else{
        Response.end(JSON.stringify({status:'-405',msg:'必填项为空'}));
        return;
    }

    //请求配置信息
    var option = {
        method: 'POST',
        url: (router == 'paypal_webscr') //判断是否是外调Paypal接口
            ? JAVA_PAY_RESP.interface.paypal_webscr.url : JAVA_PAY_RESP.server[brandCode.toUpperCase()] + interface_conf.url,
        Cookie: false,
        timeout: 60,
        agent: false,
        FileRNLength: false,
        Body: requestBody
    };

    Robot.log("[Paypal][request opts]:" + JSON.stringify(option));
    Robot.log("[Paypal][request body]:" + JSON.stringify(requestBody));
    MEAP.AJAX.Runner(option, function (err, res, data) {
        Robot.log('[Paypal][response code ]:', res.statusCode);
        Robot.log('[Paypal][response data ]:', data);
        if (!err) {
            Response.end(data);
        } else {
            Robot.log('[Paypal][error]'+router, err);
            Response.statusCode = 500;
            Response.end(JSON.stringify({status: -1, msg: '服务器请求异常'}));
        }
    });
}

exports.Runner = run;