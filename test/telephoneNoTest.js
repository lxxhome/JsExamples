var phone = '14311111111';
if(!(/^1[3456789]\d{9}$/.test(phone))){ 
    console.log("手机号码有误，请重填");  
}else{
    console.log('成功') 
}