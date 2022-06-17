let movies = [
    {name : "red socks", year : 1970, genre : "comedy", director : "none"},
    {name : "star shoot", year : 1980, genre : "love", director : "none"},
    {name : "last chrismas", year : 1990, genre : "love", director : "John"},
    {name : "inception", year : 2000, genre : "sci-fi", director : "nolan"},
    {name : "your name", year : 2010, genre : "anime", director : "makoto"},
];

let getAll = function() {
    return movies;
}

let getItem = function(name) {
    return movies.find((movie) => {
        return movie.name === name;
    });
}

console.log(getAll());
console.log(getItem("inception"));

module.exports = {getAll, getItem};