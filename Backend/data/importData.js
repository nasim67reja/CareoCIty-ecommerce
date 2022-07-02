const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/productModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/product.json`, 'utf-8')
);

//  IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Product.create(products);
    console.log('data successfully lodaed');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//  DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') importData();
else if (process.argv[2] === '--delete') deleteData();
