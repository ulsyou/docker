require('dotenv').config();
const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema, 'users');

// Connect to MongoDB
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected');

  try {
    console.log('Fetching the first 5 users...');
    const users = await User.find().limit(5);
    console.log('First 5 Users:', users);

    const userId = '59b99db4cfa9a34dcd7885b6'; 
    console.log(`Fetching user with _id: ${userId}`);
    const userById = await User.findById(userId);
    console.log('User by _id:', userById);

    const email = 'sean_bean@gameofthron.es'; 
    console.log(`Fetching user with email: ${email}`);
    const userByEmail = await User.findOne({ email });
    console.log('User by email:', userByEmail);

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
})
.catch(err => console.error('MongoDB connection error:', err));
