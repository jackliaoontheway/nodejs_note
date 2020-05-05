const cherrio = require('cherrio');
let $ = cherrio.load('<div><p><img scr="aaa.jpg"> </img></p></div>');
console.log($('img').attr('src'));
