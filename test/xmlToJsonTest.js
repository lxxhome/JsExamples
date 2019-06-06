// var parseString = require('xml2js').parseString;
// var xml = "<root>Hello xml2js!</root>"
// parseString(xml, function (err, result) {
//     console.dir(result);
// });
function parseParam(param) {
    var paramsArray = [];
    var paramsMap = {};

    if (Object.prototype.toString.call(param) === '[object Object]') {
        paramsArray.push(param);
    } else {
        paramsArray = param;
    }

    //解析xml的key节点和value节点
    for (var i = 0, P; P = paramsArray[i++];) {
        paramsMap[P.code] = P.value;
    }

    return paramsMap;
};


let body = `<?xml version="1.0" encoding="utf-8"?>
<params>
    <param>
        <code>brand</code>
        <value>JACKJONES</value>
    </param>
    <param>
        <code>parentId</code>
        <value>-1</value>
    </param>
</params>`;

const xml2js = require('xml2js');
const parseString = xml2js.parseString;
let parseOptions = { explicitArray: false, ignoreAttrs: true }; //解析参数
parseString(body,(err,result)=>{
    console.log(result);
     let requestBody= parseParam(result.params.param);
    console.log(requestBody);
});
// requestBody = parseParam(requestBody.params.param);


