require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT;
const router = require("./src/routers/index.js");
const morgan = require("morgan");

app.use(cors());

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/uploads", express.static("./uploads"));

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`\n web server listening on port ${port}`);
});
