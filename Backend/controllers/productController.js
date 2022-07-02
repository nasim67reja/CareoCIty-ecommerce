const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    // 1 (a) . Filtering
    const { page, sort, limit, fields, ...queryObj } = req.query;
    console.log(page, sort, limit, fields);
    // 1 (b) . Advanced Filtering
    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // 2. Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query.sort(sortBy);
    } else query.sort('ratingsAverage');

    // 3. Field Limiting
    if (req.query.fields) {
      const Fields = req.query.fields.split(',').join(' ');
      query.select(Fields);
    } else query.select('-__v');

    //  4 Pagination
    const Page = req.query.page * 1 || 1;
    const Limit = req.query.limit * 1 || 100;
    const skip = Limit * (Page - 1);
    query = await query.skip(skip).limit(Limit);

    if (req.query.page) {
      const numTours = await Product.countDocuments();
      console.log(skip, numTours);
      if (skip >= numTours) throw new Error('This page does not exist');
    }

    res.status(200).json({
      status: 'success',
      results: query.length,
      data: {
        allProduct: query,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'invalid',
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
