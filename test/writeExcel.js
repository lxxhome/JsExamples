var xlsx = require('node-xlsx');
var fs = require('fs');

var data = [
    {
        name: 'sheet1',
        data: [
            [
                'ID',
                'Name',
                'Score'
            ],
            [
                '1',
                'Michael',
                '99'

            ],
            [
                '2',
                'Jordan',
                '98'
            ]
        ]
    },
    {
        name: 'sheet2',
        data: [
            [
                'AA',
                'BB'
            ],
            [
                '23',
                '24'
            ]
        ]
    }
]


// 写xlsx
var buffer = xlsx.build(data);
// fs.mkdir('./test/result.xls', function (err) {
//     if (err) {
//         throw err;
//         console.log('mkdir result.xls失败')
//     }
// })

fs.writeFile('./test/result.xls', buffer, function (err) {
        if (err)
            throw err;
        console.log('Write to xls has finished');

// 读xlsx
        var obj = xlsx.parse("./test/" + "result.xls");
        console.log(JSON.stringify(obj));
    }
);