const gm = require('gm');
const fs = require('fs');

async function test() {
    let distPath = __dirname + '/JACKJONES_DA004239461525399922885.png';
    console.log(distPath);
    console.log(fs.readFileSync(distPath))
    let obj1 = await getImgSize(distPath); // 默认封面图大小
    console.log(obj1);
/**
 * 获取图片的宽高
 */
    async function getImgSize(imgUrl) {
        return new Promise(function (resolve, reject) {
            gm(imgUrl)
                .size((err, value) => {
                    console.log(value)
                    if (!err) {
                        resolve({
                            url: imgUrl,
                            imgW: value.width,
                            imgH: value.height
                        })
                    } else {
                        reject(err)
                    }

                })
        })
            .catch(function (err) {
                console.log(err)
                return ''
            })
    }


}

test();
