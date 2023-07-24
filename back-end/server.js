const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/api/v1/tasks", taskRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server has started at port ${process.env.PORT}`);
});
