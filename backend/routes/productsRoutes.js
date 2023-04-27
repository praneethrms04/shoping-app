const express = require("express");
const accessToken = require("../middleware/authjwt");
const verifyProductRequest = require("../middleware/verifyProductRequest");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsControllers");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", [accessToken, verifyProductRequest], createProduct);
router.put("/:id", [accessToken], updateProduct);
router.delete("/:id", [accessToken], deleteProduct);

module.exports = router;
