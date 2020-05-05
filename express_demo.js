const express = require('express');
const app = express(); // 实例化

app.listen(3000,() => {
    console.log('server start');
});
app.get('/user/login',(req,res) => {
    res.send('login success');
});