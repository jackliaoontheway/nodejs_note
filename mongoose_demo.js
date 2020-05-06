const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true});

/**
 * 连接数据库
 */
let db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', () => {
    console.log('db ok');
});

/**
 * scheme 对象
 */
let userSchema = new mongoose.Schema({
    name : {
        type:String,required:true
    },
    age: Number
});
let User = mongoose.mode('user',userSchema);

User.insertMany({name:'jack',age : 20}).then((data) => {
    console.log('inserted :' + data);
})
.then(() => {

})
.catch(() => {

});

User.find({name : 'jack'}).then((data) => {
    console.log('find :' + data);
})
.catch(() => {

});;

User.remove({name : 'jack'}).then((data) => {
    console.log('remove :' + data);
})
.catch(() => {

});;