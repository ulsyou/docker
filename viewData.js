require('dotenv').config();
const mongoose = require('mongoose');
const Comment = require('./models/Comment');
const Movie = require('./models/Movie');
const User = require('./models/User');

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');

  try {
    // Truy vấn các collection
    console.log('Fetching comments...');
    const comments = await Comment.find().limit(5);
    console.log('Comments:', comments);

    console.log('Fetching movies...');
    const movies = await Movie.find().limit(5);
    console.log('Movies:', movies);

    console.log('Fetching users...');
    const users = await User.find().limit(5); 
    console.log('Users:', users);

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await mongoose.disconnect();
  }
})
.catch(err => console.error('MongoDB connection error:', err));
