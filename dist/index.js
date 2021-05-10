"use strict";
// import * as dotenv from "dotenv";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
// var favicon = require('serve-favicon')
// import express  from 'express';
dotenv.config();
// const express = require('express');
// const path = require('path');
// require('dotenv').config();
//App de Express
const app = express();
// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');
//Path publico
const publicPath = path.resolve(__dirname, 'public');
// app.get("/", (req: any, res: any) => {
//     res.sendFile(path.resolve(__dirname,"./public/index.html"));
//   });
app.use(express.static(publicPath));
// app.use(favicon(__dirname + 'favicon.ico'));
server.listen(process.env.PORT, (error) => {
    if (error)
        throw new Error(error);
    console.log('Serve Run in port:', process.env.PORT);
});
//# sourceMappingURL=index.js.map