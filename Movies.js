const mongoose = require('mongoose');
const { Schema } = mongoose;
const connectionString = require("credentials.js")


mongoose.connect(connectionString, {
    dbName: 'IT122',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const movieSchema = new Schema({
 title: { type: String, required: true },
 name: String,
 year: Number,
 genre: String,
 director: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

// export const Movie = mongoose.model('Movie', movieSchema);