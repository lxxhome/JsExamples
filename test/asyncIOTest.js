const fs = require('fs');

fs.readFile('test/testTemp/a.js', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.unlink('test/testTemp/a.js', (unlinkerr) => {
        if (unlinkerr) throw unlinkerr;
    })
})
// fs.unlinkSync('1.js');