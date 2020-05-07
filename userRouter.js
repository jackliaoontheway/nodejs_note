const express = require('express');
const router = express.Router();

router.get('/add',(req,resp) => {
    console.log('user controller add');
});

module.exports = router;