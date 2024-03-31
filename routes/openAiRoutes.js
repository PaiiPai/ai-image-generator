const openAiRoutes = require("express").Router();
const openAiController = require("../controllers/openAiController");

openAiRoutes.post("/generateImg", openAiController.imgGenerator);

module.exports = openAiRoutes;