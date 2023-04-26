const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc get all products
// @route GET "/api/v1/products"
// @access public

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// @desc get product by Id
// @route GET "/api/v1/products/:id"
// @access public

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById({ _id: req.params.id });
  if (!product) {
    res.status(400);
    throw new Error("Product is not found");
  }
  res.status(200).json(product);
});

// @desc create a product
// @route POST "/api/v1/products"
// @access public

const createProduct = asyncHandler(async (req, res) => {
  const { name, description, imageUrl, category, price } = req.body;
  const product = await Product.create({
    name,
    description,
    imageUrl,
    category,
    price,
  });
  res.status(201).json(product);
});

// @desc update a product
// @route PUT "/api/v1/products/:id"
// @access public

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("Product is not found");
  }
  if (product._id.toString() !== req.params.id) {
    res.status(403);
    throw new Error("user don't have permission to update this product");
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProduct);
});

// @desc delete a product
// @route DELETE "/api/v1/products/:id"
// @access public

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("product is not found");
  }
  if (product._id.toString() !== req.params.id) {
    res.status(403);
    throw new Error("User does not hae permission to delete this product");
  }
  await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "product deleted success..!" });
});

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
