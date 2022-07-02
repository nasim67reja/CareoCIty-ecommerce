const express = require("express");
const morgan = require("morgan");

const app = express();

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
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

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
