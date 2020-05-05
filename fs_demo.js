const fs = require('fs');

/**
 * read dir
 */
let dirs = null;
try {
    dirs = fs.readdirSync('./');
    console.log(dirs);
} catch (err) {
    console.log(err);
}
dirs = fs.readdir('./', (error, data) => {
    console.log(error);
    console.log(data);
});

/**
 * mkdir
 */

//  fs.mkdir('./test',(error) => {
//      console.log(error);
//  });
//  fs.mkdir('./test/a',(error) => {
//     console.log(error);
// });
// fs.rmdir('./test',(error) => {
//     console.log(error);
// });

/**
 * writeFile,readFile
 * 
 */
// fs.writeFile('./test/a.txt','test data a a ',(error) => {
//     console.log(error);
// });
fs.appendFile('./test/a.txt','test data a a ',(error) => {
    console.log(error);
});
fs.readFile('./test/a.txt',(error,data) => {
    console.log(error);
    console.log(data.toString('utf8'));
});

/**
 * 查询 文件的状态
 */
fs.stat('./test',(error,data) => {
    console.log(data);
    console.log(data.isFile());
});