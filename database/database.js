const { TooManyRequests } = require('http-errors');
const mongoose = require('mongoose');

// Tvek på säkerheten med hårdkodat lösen för databasanvändaren?
const uri = 'mongodb+srv://ljwedin:7BBvdNqfJLzSiQR6@cluster0.q6ewk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => console.log(err))

module.exports = mongoose;