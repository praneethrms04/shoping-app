const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      "MongoDB Connected",
      connect.connection.name,
      connect.connection.host
    );
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;