const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();
// 1. middleware

app.use(morgan("dev"));
app.use(express.json());

app.use("/test", (req, res, next) => {
  console.log("hello from middleware");
  next();
});

// //////////////////////////////////////////////////////////////////////////
// /////////////////////////// CRUD OPERATION ///////////////////////////////
// //////////////////////////////////////////////////////////////////////////

// ///// 2. ROUTE HANDLER
// 👉👉👉👉👉👉👉👉👉 get data

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/product.json`, "utf-8")
);

const getAllProducts = (req, res) => {
  console.log("hit this route");
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
};

const getProduct = (req, res) => {
  const id = req.params.id * 1;
  if (id > products.length)
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

const createProduct = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "This route is not yet defined",
  });
};

const updateProduct = (req, res) => {
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

const deleteProduct = (req, res) => {
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

// app.get("/api/v1/products", getAllProducts);
// app.post("/api/v1/products", createProduct);
// app.get("/api/v1//products/:id", getProduct);
// app.patch("/api/v1/products/:id", updateProduct);
// app.delete("/api/v1/products/:id", deleteProduct);

//// ROUTES
const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter
  .route("/:id")
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

app.use("/api/v1/products", productRouter);

app.listen(3000, () => {
  console.log(`app running on 3000`);
});
