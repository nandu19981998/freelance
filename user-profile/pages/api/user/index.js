// Next.js API route support: https://nextjs.org/docs/api-routes/introductio
const mongoose = require('mongoose');
const UserDetails = require('../../../models/User')

const uri = 'mongodb+srv://pvananthakrishnan17:mongodb123@cluster0.ojzhdqq.mongodb.net/freelance-userdetails?retryWrites=true&w=majority'

mongoose.connect(uri, {
  useUnifiedTopology: true,
}) .then(() => {
    console.log('Connected to MongoDB');
    // Start executing your database operations here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

async function getAllUserDetails() {
  try {
    const documents = await UserDetails.find({});
    console.log(documents);
  } catch (error) {
    console.error('Error retrieving documents:', error);
  }
}

export default async function handler(req, res) {
  getAllUserDetails();
  res.status(200).json({name: "PV"});
}
