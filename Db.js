const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://vrutik:vrutik123@cluster0.tyro0jo.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'BikeSpa';

  // Use connect method to connect to the server
  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  

  module.exports = db;