// import http from "http";
// import express from "express";

const http = require("http");
const { parse } = require('querystring');
const express = require("express");
const data = require("./data.js");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static(".public"));
app.use(express.urlencoded());
app.use(express.json);
app.set("view engine", "ejs");

app.get('/', (req,res) => {
    res.type('text/html');
    res.render('home', { movies: data.getAll()}); // send content of 'home' view to browser
    // res.sendFile(path.join(__dirname, './home.html'));
});

app.get('/detail', (req,res) => {
    console.log(req.query);
    let result = data.getItem(req.query.name);
    res.render("detail", {
        name: req.query.name, 
        result
        }
    );
});

// app.post('/detail', (req,res) => {
//     res.type('text/html');
//     console.log(req.body);
//     res.end("Detail for " + req.body["name"]);
//     // res.sendFile(path.join(__dirname, './home.html'));
// });

app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});

app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});



// http.createServer((req,res) => {
//     console.log("createServer got request");
//     var path = req.url.toLowerCase();
//     let url_parts = req.url.split("?"); // separate route from query string
//     let query = parse(url_parts[1]); // convert query string to a JS object
//     switch(url_parts[0]) {
//         case '/':
//             fs.readFile("public/home.html", (err, data) => {
//                 if (err) return console.error(err);
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.end(data.toString());
//             });
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Home page');
//             break; 
//         case '/about':
//             fs.readFile("about.html", (err, data) => {
//                 if (err) return console.error(err);
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.end(data.toString());
//             });
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About page');
//             break;
//         case '/detail':  
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Detail for ' + query["name"]);
//             break; 
//         default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('404 Not found');
//             break;
//     }
// }).listen(process.env.PORT || 3000, console.log("server is open")); 
