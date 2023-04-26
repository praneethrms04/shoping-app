const verifyProductRequest = (req, res, next) => {
  const { name, description, imageUrl, category, price } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("name is not provided");
  }
  if (!description) {
    res.status(400);
    throw new Error("description is not provided");
  }
  if (!imageUrl) {
    res.status(400);
    throw new Error("imageUrl is not provided");
  }
  if (!category) {
    res.status(400);
    throw new Error("category is not provided");
  }
  if (!price) {
    res.status(400);
    throw new Error("price is not provided");
  }
  next();
};

module.exports = verifyProductRequest;
