const MEAP = require('meap');
const _ = require('underscore');
const parser = require('meap_xml');
function run(Param, Robot, Request, Response, IF)
{
    try{
        //修改下游代理模式:GET方式
        var _method = 'GET';//Request.method

        //截取请求路径
        var brandCode = Param.baas.brand;
        var payInterface = Param.baas.pay_route;
        Robot.log("[payResp][req payInterface]:" + payInterface );
        //获取请求体
        var body = (Buffer.isBuffer(Param.body) && Param.body.toString().trim());

        //微信
        if(payInterface == 'wx_notify' || payInterface == 'wx_notifyEx' || payInterface == 'wechat_notify'
            //微信新增 20170626
            || payInterface == 'weixin_notify_new'){
            _method = 'POST';
        }else{ //非微信
            body = JSON.parse(body);
        }

        body = body || (_.isEmpty(Param.fields) ? null : Param.fields) || Param.params;

        switch(payInterface.split('_')[0]){
            case 'ali':
                body.sign = body.sign?encodeURIComponent(body.sign) : null;
                break;
            case 'yl':
                body.sysReserved = body.sysReserved?encodeURIComponent(body.sysReserved) : null;
                break;
            case 'wx':break;
        }

        var interface_conf = JAVA_PAY_RESP.interface[payInterface];

        if(!interface_conf){
            Response.statusCode = 500;
            Response.end(JSON.stringify({
                status: -1,
                msg: '接口参数有误'
            }));
            return
        }

        var option = {
            method: _method,
            url: JAVA_PAY_RESP.server[brandCode.toUpperCase()]+""+interface_conf.url,
            Cookie: false,
            timeout: 60,
            agent: false,
            FileRNLength: false
        };

        if(interface_conf.act == 'proxy' && payInterface != 'wx_notify' && payInterface != 'wx_notifyEx'
            //微信新增 20170626
            && payInterface != 'weixin_notify_new'){
            option.Stream = Response
        }

        if(_method.toUpperCase() == 'POST' || _method.toUpperCase() == 'PUT'){
            option.Headers = Request.headers;
            if(payInterface != 'wx_notify' && payInterface != 'wx_notifyEx' && payInterface != 'wechat_notify'
                //微信新增 20170626
                && payInterface != 'weixin_notify_new'){
                option.Body = JSON.stringify(body);
            }else{
                option.Body = body;
            }
        }

        if(_method.toUpperCase() == 'GET' || _method.toUpperCase() == 'DELETE'){
            var pathch = "";
            var param = body;
            for (var i in param) {
                pathch += i + "=" + encodeURI(param[i]) + "&";
            }
            if (pathch.length > 0) {
                pathch = pathch.substring(0, pathch.length - 1);
                pathch = "?" + pathch;
            }
            option.url = option.url + pathch;
        }

        if(payInterface.indexOf('ali_RefundNotifyUrl') > -1){
            _method = 'POST';
            option.method = 'POST';
            option.Body = JSON.stringify(body);
        }

        Robot.log("[payResp][req path]:" + option.url + " method:" + option.method );
        Robot.log("[payResp][req body]", option.Body);
        MEAP.AJAX.Runner(option, function (err, res, data) {
            try{
                Robot.log('[payResp][res statusCode]:',res.statusCode);
                Robot.log('[payResp][res data]',data);
                if (!err) {
                    if(payInterface == 'wx_notify' || payInterface == 'wx_notifyEx'){
                        Response.end(data);
                    }
                    //代理
                    if(interface_conf.act == 'proxy'){
                        Response.end();
                    }
                    //重定向
                    if(interface_conf.act == 'redirect'){
                        Robot.log('[302_Location]',JSON.parse(JSON.parse(data).data).returnHtml);
                        Response.writeHead(302, {
                            'Location': JSON.parse(JSON.parse(data).data).returnHtml
                        });
                        Response.end();
                    }
                }else {
                    Robot.log('[inbroundByPay][error]',err);
                    Response.statusCode = 500;
                    Response.end(JSON.stringify({
                        status: -1,
                        msg: '服务器请求异常'
                    }));
                }
            }catch(e){
                Robot.log('[inbroundByPay][error]:',e);
                Response.statusCode = 500;
                Response.end(JSON.stringify({
                    status: -1,
                    msg: '服务器请求异常'
                }));
            }
        });
    }catch(e){
        Robot.log('[inbroundByPay][error]:',e);
        Response.statusCode = 500;
        Response.end(JSON.stringify({
            status: -1,
            msg: '服务器请求异常'
        }));
    }
}

exports.Runner = run;