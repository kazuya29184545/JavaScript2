const express = require('express');
const { Movies } = require("./Movies.js");
const movie = require("./data.js");
const ejs = require('ejs');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json());
app.set('view engine', 'ejs'); // set the view engine to ejs
// send static file as response
app.get('/', (req,res) => {
    Movies.find({}).lean()
        .then((movies) => {
            // res.render('home', { movies });
            res.render('home3', {movies: JSON.stringify(movies)});
        })
        .catch(err => next(err));
});

app.post('/api/movies/add', (req,res) => {
    const newmovie = {'name': req.body.name, 'year': req.body.year, 'director': req.body.director, 'genre': req.body.genre};
    Movies.updateOne({"name": req.body.name}, newmovie, {upsert: true}).lean()
        .then((movies) => {
            res.json({"updated": movies});
        }) 
        .catch(err => next(err));
});
app.get('/api/movies/:name', (req,res) => {
    Movies.findOne({"name": req.params.name}).lean()
        .then((movies) => {
            // uncorrect route
            // res.render('detail', { result: movies, title: req.params.title });
            // for week6(return JSON data)
            res.send({ result: movies, name: req.params.name });
        })
        .catch(err => next(err));
});
app.get('/api/movies/delete/:name', (req,res) => {
    Movies.remove({"title": req.params.name}).lean()
        .then((movies) => {
            
            res.json({"deleted": movies});
        })
        .catch(err => next(err));
});


app.get('/detail', (req,res) => {
    // db query can use request parameters
    Movies.findOne({ title:req.query.name }).lean()
        .then((movie) => {
            res.render('detail', {result: movie} );
        })
        .catch(err => next(err));
});
app.post('/detail', (req,res) => {
    res.type('text/html');
    console.log(req.body);
    res.end("Detail for " + req.body["name"]);
    // res.sendFile(path.join(__dirname, './home.html'));
});


// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});
   
// define 404 handler
app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});
app.listen(app.get('port'), () => {
    console.log('Express started');
});