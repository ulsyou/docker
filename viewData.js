const mongoose = require('mongoose');
require('dotenv').config();
const { connectToMongoDB, disconnectFromMongoDB } = require('./db');

const fetchUsers = async () => {
  try {
    const User = mongoose.model('User', new mongoose.Schema({}, { strict: false }), 'users');
    
    console.log('Fetching the first 5 users...');
    const users = await User.find({}).limit(5).exec();
    console.log('First 5 Users:', users);
    
    console.log('Fetching user with _id: 59b99db4cfa9a34dcd7885b6');
    const userById = await User.findById('59b99db4cfa9a34dcd7885b6').exec();
    console.log('User by _id:', userById);

    console.log('Fetching user with email: sean_bean@gameofthron.es');
    const userByEmail = await User.findOne({ email: 'sean_bean@gameofthron.es' }).exec();
    console.log('User by email:', userByEmail);
    
  } catch (err) {
    console.error('Error fetching users:', err);
  }
};

const fetchMovies = async () => {
  try {
    const Movie = mongoose.model('Movie', new mongoose.Schema({}, { strict: false }), 'movies');
    
    console.log('Fetching the first 5 movies...');
    const movies = await Movie.find({}).limit(5).exec();
    console.log('First 5 Movies:', movies);
    
    console.log('Fetching movie with _id: 573a1390f29313caabcd5293');
    const movieById = await Movie.findById('573a1390f29313caabcd5293').exec();
    console.log('Movie by _id:', movieById);
    
  } catch (err) {
    console.error('Error fetching movies:', err);
  }
};

const main = async () => {
  await connectToMongoDB();

  await fetchUsers();
  await fetchMovies();

  await disconnectFromMongoDB();
};

main();
