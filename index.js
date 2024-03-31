// modules
const express = require("express");
require("dotenv").config();
const openAiRoutes = require("./routes/openAiRoutes");

const app = express();

// env variables
const port = process.env.PORT;

// server
app.listen(port, () => console.log(`Server initialized at port: ${port}`));

// Middlewares & Routes
app.use("/openAi", openAiRoutes);

console.log("Hello World");