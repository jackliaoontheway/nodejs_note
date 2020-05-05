const url = require('url');
const qs = require('querystring');

let urlString = 'https://47.95.207.1:3000/fcj/recommend/hot/hehe?us=123';
let urlObj = url.parse(urlString);
console.log(urlObj);

let urlObj2 = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: '47.95.207.1:3000',
    port: '3000',
    hostname: '47.95.207.1',
    hash: null,
    search: '?us=123',
    query: 'us=123',
    pathname: '/fcj/recommend/hot/hehe',
    path: '/fcj/recommend/hot/hehe?us=123',
    href: 'https://47.95.207.1:3000/fcj/recommend/hot/hehe?us=123'
};

let urlString2 = url.format(urlObj2);
console.log(urlString2);


let queryStr = 'name=jack&id=123';
let obj = qs.parse(queryStr);
console.log(obj);

queryStr = 'name-jack#id-123';
obj = qs.parse(queryStr,'#','-');
console.log(obj);

queryStr = qs.stringify(obj);
console.log(queryStr);

queryStr = qs.stringify(obj,'#','-');
console.log(queryStr);
