# node-play
Node.js Example

## 建立 Hello World

1. 建立一個資料夾
   ```shell 
    $ mkdir node-play && cd node-play
   ```
2. 初始化npm，會產生package.json
   ```shell
   $ npm init
   ```
3. 安裝 Express 並建立套件清單
   ```shell
   $ npm install express --save
   ``` 
4. 建立index.js並且編輯
   ```shell
   $ touch index.js
   ```
   ```Javascript
    var express = require('express');
    var app = express();

    app.get('/', function(req, res) {
        res.send('Hello World');
    });

    app.listen(3000, function() {
        console.log('http://localhost:3000 is running !');
    });
   ```
5. 執行Web Server
   ```shell
   $ node index.js
   ```
## Render HTML

1. 新增index.html並且編輯
   ```shell
   $ touch index.html
   ```
   ```html
   <!DOCTYPE HTML>
   <html>
   <head>
        <meta charset= 'utf-8'>
        <title>Hello World</title>
   </head>
   <body>
        <h1>Hello world</h1>
   </body>
   </html>     
    ```
2. 編輯index.js
    ```Javascript
    var express = require('express');
    var app = express();

    app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
    });

    app.listen(3000, function() {
        console.log('http://localhost:3000 is running !');
    });
    ```