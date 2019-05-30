function test() {
    if (true) {
        try {
            let logContent = {};
            logContent.brand = 'ONLY';
            logContent.memberId = loginInfo.id;
            logContent.crmId = requestBody.crmId || null;
            logContent.consignee = requestBody.consignee;
            logContent.contactTel = requestBody.contactTel;
            logContent.payPrice = requestBody.realSellPrice;
            logContent.time = new Date().toLocaleString();
            logContent.IP = IP;
            this.Log.i(JSON.stringify(logContent));
            fs.writeFileSync(`${root}/assets/temp/orderLogException.json`, JSON.stringify(logContent) + ';', { flag: 'a+' });
        } catch (err) {
            console.log('the err message is '+err.message);
            console.log(err.stack)
            // console.log('this is a test file');
        }
    }
}


    test();