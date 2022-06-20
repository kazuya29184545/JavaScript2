const express = require('express');
const { Movie } = require("./Movies.js");
const { title } = require('process');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json());
app.set('view engine', 'ejs'); // set the view engine to ejs

// send static file as response
app.get('/', (req,res) => {
    Movie.find({}).lean()
        .then((movies) => {
            // res.render('home', { movies });
            res.render('detail', {movies: JSON.stringify(movies)});
        })
        .catch(err => next(err));
});