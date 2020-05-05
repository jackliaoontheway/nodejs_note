const express = require('express');
const bodyparser = require('body-parser');

const app = express(); // 实例化

app.use(bodyparser.urlencode({extended:false})); // x-www-form-urlencode
app.use(bodyparser.json({extended:false})); // json

app.listen(3000,() => {
    console.log('server start');
});
app.get('/user/login',(req,res) => {

    console.log(req.query);
    res.send('login success');
});

app.post('user/register', (req,resp) => {
    // 使用 body-parser  解析 req.body
});