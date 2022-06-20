const { Movie } = require("../Movies.js");


// return all records
Movie.find({}).lean()
.then((movies) => {
console.log(movies);
})
.catch(err => next(err));

Movies.find({"year": "1970"}).lean()
  .then((movies) => {
    console.log(movies);
  })
  .catch(err => next(err));

// return a single record
Movies.findOne({"year": "1970"}).lean()
  .then((movies) => {
      console.log(movies);;
  })
  .catch(err => next(err));

// // insert or update a single record
const newMovie = {"name": "your name", "year": "2018", "director": "Makoto Shinkai", "genre": "anime"}
Movies.updateOne({'name':'back to the future'}, newMovie, {upsert:true}, (err, result) => {
  if (err) return next(err);
  console.log(result);
  // other code here
}); 


