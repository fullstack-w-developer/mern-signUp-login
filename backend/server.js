const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routerSignUp = require("./server/route/signUp/routeSignUp");
const dotenv = require("dotenv");
const connectDB = require("./server/database/conection");
var bodyParser = require("body-parser");

const app = express();

dotenv.config({ path: "./config.env" });

connectDB();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());
app.use(morgan("tiny"));
app.use("/api/v1", routerSignUp);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running http:localhost:${PORT}`);
});
