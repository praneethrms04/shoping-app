const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your product name"],
    },
    description: {
      type: String,
      required: [true, "Please enter your product description"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please enter your product image Url"],
    },
    category: {
      type: String,
      required: [true, "Please enter your product category"],
    },
    price: {
      type: Number,
      required: [true, "Please enter your product category"],
    },
    createdAt: {
      type: Date,
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
  },
  {
    versionKey: false, // this will remove the __v field, which indicates the internal revision of the document
  }
);

module.exports = mongoose.model("Product", productSchema);
