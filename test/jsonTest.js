let stocks = ['[{"productSKU":"117124534A29400","quantity":"250","quantityEp":"230","updateTime":"2018-09-18 14:35:29"}]',
    '[{"productSKU":"117150501G43271","quantity":"0","quantityEp":0,"updateTime":"2018-09-18 14:35:29"}]',
    '[{"productSKU":"117146516F16400","quantity":"0","quantityEp":0,"updateTime":"2018-09-18 14:35:29"}]',
    '[{"productSKU":"116361510010360","quantity":"63","quantityEp":"30","updateTime":"2018-09-18 14:35:28"}]',
    '[{"productSKU":"117116502E39271","quantity":"13","quantityEp":"9","updateTime":"2018-09-18 14:35:27"}]',
    '[{"productSKU":"117124530F16400","quantity":"3","quantityEp":"2","updateTime":"2018-09-18 14:35:26"}]',
    '[{"productSKU":"11641G501010271","quantity":"0","quantityEp":0,"updateTime":"2018-09-18 14:35:26"}]'];

let formatStocks = stocks.map(item => JSON.parse(item)[0])
console.log(formatStocks);