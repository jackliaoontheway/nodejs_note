### 什么是nodejs
+ chrome V8 runtime
+ 事件驱动
+ 非阻塞I/O

### nvm
 + node version manager

### cnpm
 + npm install -g cnpm --registry https://registry.npm.taobao.org

### 设置镜像源
 + npm config set registry https://registry.npm.taobao.org
 + www.npmjs.com
### node 运行环境 REPL

### 模块化
 + 内置模块 (node 提供的模块)
 + 第三方模块
 + 自定义模块   
  - 创建一个模块
  - 导出一个模块
  - 引用一个模块并且调用 
### 自定义模块 demo
``` js
    // es 5 语法
    let product = {
        getPrice() {
             return 1;
        }
    }
    module.exports = product; // 导出模块

    let Module = require('./product'); // 引入模块

    // es 6  语法

```

### 模块引用
+ 第三方模块的引用 从当前目录的node_modules 以此往上找

### fs 文件操作
+ fs_demo.js

### url
``` js
    url_demo.js;
    const url = require('url');
    let urlObj = url.parse(urlString);
    let urlString2 = url.format(urlObj2);

    queryStr = 'name-jack#id-123';
    obj = qs.parse(queryStr,'#','-');
    console.log(obj);

    queryStr = qs.stringify(obj);
    console.log(queryStr);
```

### http
+ http_demo.js

### cherrio
+ npm install -save cherrio
