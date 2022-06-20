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

let addItem = function(newMovie) {
    // const newMovie = []
    newMovies = movies.push(newMovie) 
    return newMovies
}

let deleteItem = function(name) {
    // retain array length for later comparison after array modification
    const movieLength = movies.length;
    newMovies = movies.filter((movie) => {
        return movie.name !== name;
    });
    // if old & new array lengths differ, item was deleted
    return {deleted: movieLength !== newMovies.length,name: name, total: movieLength };
}


// console.log(getAll());
// console.log(getItem("inception"));
// console.log(addItem({name : "intersteller", year : 2018, genre : "Si-fi", director : "nolan"}));
// console.log(deleteItem("your name"))

module.exports = {getAll, getItem, addItem, deleteItem, movies};