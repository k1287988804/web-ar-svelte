// server.js
// 引入各种模块
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const app = express();

app.use(express.static('../dist'));

// 启动服务
// const port = process.env.PORT || 80;
// const server = http.createServer(app).listen(80, () => {
//   console.log('Server Listening on port: ' + port)
// })

const httpsOption = {
  key: fs.readFileSync('./private.key'),
  cert: fs.readFileSync('./cert.pem'),
};
const safePort = 443;
const server_safe = https
  .createServer(httpsOption, app)
  .listen(safePort, () => {
    console.log('Server https on port: ' + safePort);
  });
