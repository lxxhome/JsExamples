let descpritonBody = `<div style="width:730px; margin:0 auto;"><img src="http://ecphoto.bestseller.com.cn/vmimages/2015_Q1/315317013_01.jpg" width="730" height="1048" />   
</div>`;
console.log(descpritonBody.indexOf('<body>'));
console.log(descpritonBody.indexOf('</body>'));

if (descpritonBody.indexOf('<body>') < 0) {
    descpritonBody = '<head></head><body>' + descpritonBody;
}
if (descpritonBody.indexOf('</body>') < 0) {
    descpritonBody = descpritonBody + '</body>';
}

console.log(descpritonBody);
