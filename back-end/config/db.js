const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB);
    console.log(`Connected to database ${conn.connection.host}`);
  } catch (error) {
    console.log("Error in connecting to database");
  }
};

module.exports = connectDB;
