
let images = ['http://1111.jpg','http://2222.jpg','http://3333.jpg'];
function test(images,postion){
    setTimeout(()=>{
        console.log(`===> 保存文件成功 ${postion} : ${images[postion]}`);
        if(postion < images.length-1){
            test(images,++postion)
        }
    },2000);
}

test(images,0);