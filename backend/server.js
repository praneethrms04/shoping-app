const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors')

const app = express();
connectDB();

app.use(express.json());
app.use(cors())

app.route("/").get((req, res) => {
  res.json({ message: "I am Home route" });
});

app.use("/api/v1/products", require("./routes/productsRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.use(errorHandler)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
