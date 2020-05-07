const fs = require('fs');

function isExist(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (error, stats) => {
            if (error) {
                reject(error);
            } else {
                resolve(stats);
            }
        });
    });
}


function delFile(file) {
    return new Promise((resolve, reject) => {
        fs.unlink(file, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(file);
            }
        });
    });
}

let file = 'a.js';
isExist(file)
.then((stats) => {
    console.log('is exist: ' + stats);
    return delFile(file);
})
.then((msg) => {
    console.log(msg);
    //throw new Error('break');
})
.then(() => {
    console.log(111);
})
.then(() => {
    console.log(222);
})
.catch((err) => {
    console.log(err);
});