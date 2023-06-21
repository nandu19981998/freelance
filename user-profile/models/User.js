const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
  results: [{
    gender: String,
    name: {
      title: String,
      first: String,
      last: String
    },
    location: {
      street: {
        number: Number,
        name: String
      },
      city: String,
      state: String,
      country: String,
      postcode: Number,
    },
    email: String,
    phone: [String],
    cell: String,
    picture: {
      thumbnail: String
    }
  }]
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema, 'user-details');
module.exports = UserDetails;
