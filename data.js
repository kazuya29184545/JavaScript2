let movies = [
    {name : "red socks", year : 1970, genre : "comedy", director : "none"},
    {name : "star shoot", year : 1980, genre : "love", director : "none"},
    {name : "last chrismas", year : 1990, genre : "love", director : "John"},
    {name : "inception", year : 2000, genre : "sci-fi", director : "nolan"},
    {name : "your name", year : 2010, genre : "anime", director : "makoto"},
];

let getAll = movies.filter((movie) => {
    return movie.year > 1950;
  });
  
let getItem = movies.find((movie) => {
    return movie.director === 'nolan';
});

module.exports = {getAll, getItem};