// import http from "http";
// import express from "express";

const http = require("http");
const express = require("express");
const {getAll, getItem} = require("./data")
const app = express();

http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        case '/detail?director=nolan':
            res.status(200).json(getItem); 
        default:
            res.status(200).json(getAll); 
            break;
    }
}).listen(process.env.PORT || 3000, console.log("server is open"));
