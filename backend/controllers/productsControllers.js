// @desc get all products
// @route GET "/api/v1/products"
// @access public

const getAllProducts = (req, res) => {
  res.status(200).json("all products");
};

// @desc get product by Id
// @route GET "/api/v1/products/:id"
// @access public

const getProductById = (req, res) => {
  res.status(200).json(`get product by id ${req.params.id}`);
};

// @desc create a product
// @route POST "/api/v1/products"
// @access public


const createProduct = (req, res) => {
  res.status(201).json("created a product");
};


// @desc update a product
// @route PUT "/api/v1/products/:id"
// @access public


const updateProduct = (req, res) => {
  res.status(200).json(`updated product ${req.params.id}`);
};

// @desc delete a product
// @route DELETE "/api/v1/products/:id"
// @access public

const deleteProduct = (req, res) => {
  res.status(200).json(`Deleted product ${req.params.id}`);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
