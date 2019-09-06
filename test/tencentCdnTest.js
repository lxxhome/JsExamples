const qcloudSDK = require('qcloud-cdn-node-sdk');

//生成9位随机数
function randomCode() {
    let code='';
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = 0; i < 9; i++) {
        code = code.concat(numbers[(Math.floor(Math.random() * 10))]);
    }
    return code;
}
// 腾讯云cdn测试
qcloudSDK.config({
    secretId: 'AKIDKM8e19Qe2B5j7KKyRecKn5GBsNdemvBL',
    secretKey: '7ybz81h7KJ1TfbLuDrGYaMt9CynMeg3B'
})

qcloudSDK.request('RefreshCdnDir', {
    'SecretId': 'AKIDKM8e19Qe2B5j7KKyRecKn5GBsNdemvBL',
    'Timestamp': Date.now().toString().substr(0, 10),
    'Nonce': randomCode(),
    'dirs.0': 'https://cdn.only.cn/',
}, (res) => {
    console.log(Date.now().toString().substr(0, 10))
    console.log(JSON.parse(res));
    // res为json格式
    // do something
}) 