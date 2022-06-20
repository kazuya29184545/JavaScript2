const http = require("http");
const parse = "querystring"; 
const express = require("express");
const fs = require("fs");
const data = require("./data")
const cors = require("cors");
const {getItem, addItem, deleteItem} = require("./data.js");
const Movie = require("./Movies.js");

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));  // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json());
app.set('view engine', 'ejs');

// send static file as response
app.get('/', (req,res) => {
    res.render('home', { movies: data.getAll()}); 
    // res.sendFile('./public/home.html');
});

app.get('/api/movies', (req,res) => {
    try {
        let movies = movies.getAll()
        res.json(data.getAll()); 
    } catch (error) {
        return res.status(500).send('Database Error occurred');
    }
    
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

//add movie
app.post('/api/movies', (req,res) => {
        try{
            const createMovie = await Movie.create(req.body);
            res.status(200).json(createMovie);
        } catch (err) {
            res.status(500).json(err);
        }
})

//delete movie
app.get('/api/movies', (req,res) => {
    try{
        const deleteMovie = await Movie.findOneAndDelete(req.query.name);
        if (!deleteMovie) {
            return res.status(404).json();
        }
        res.status(200).json(deleteMovie); 
    } catch (err) {
        res.status(500).json(err);
    }
})








// send plain text response
app.get('/detail', (req,res) => {
    res.type('text/plain');
    console.log(req.query)
    res.end("details for " + req.query.name)
});

app.post('/detail', (req,res) => {
    res.type('text/plain');
    console.log(req.body)
    res.end("details for " + req.body.name)
});

   // define 404 handler
app.use((req,res) => {
    res.type('text/plain');
    res.status(503);
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
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('Home page');
//             break; 
//         case '/about':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About page');
//             break;
//         case '/detail': 
//             res.status(200, {'Content-Type': 'text/plain'}).json(getItem); 
//             res.end('Detail')
//             break;
//         default:
//             res.status(200).json(getAll); 
//             break; 
//     }
// }) 