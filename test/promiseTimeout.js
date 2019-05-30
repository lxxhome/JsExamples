function saySomething(str)
{
    console.log(str);
}
setTimeout(()=>saySomething("3 seconds passed"),1000);
const wait =ms=>new Promise(resolve=>setTimeout(resolve,ms));
wait(2000).then(()=>saySomething("3 seconds")).catch(()=>{console.log('failed;')});
