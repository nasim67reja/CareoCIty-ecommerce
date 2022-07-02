const fs = require("fs");

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/product.json`, "utf-8")
);

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id * 1;
  if (id >= products.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  const product = products.find((product) => product.id === id);

  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
};

exports.createProduct = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This route is not yet defined",
  });
};

exports.updateProduct = (req, res) => {
  if (req.params.id * 1 > products.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });

  res.status(200).json({
    status: "success",
    message: "we will update later. Thanks for being with us",
  });
};

exports.deleteProduct = (req, res) => {
  if (req.params.id * 1 > products.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id",
    });
  res.status(204).json({
    status: "success",
    data: null,
  });
};
