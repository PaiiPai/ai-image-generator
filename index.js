// setup & config
const express = require("express");
require("dotenv").config();
const app = express();

// env variables
const port = process.env.PORT;

// server
app.listen(port, () => console.log(`Server initialized at port: ${port}`));

console.log("Hello World");