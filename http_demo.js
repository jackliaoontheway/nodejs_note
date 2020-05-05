const http = require('http');

let url = 'www.baidu.com';
http.get(url, (res) => {
    res.on('data',(chunk) => {
        console.log(chunk);
    });
    res.on('end', () => {
        console.log('end');
    });
}).on('error',() => {
    console.log('error');
});