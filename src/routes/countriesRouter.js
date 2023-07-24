const { Router } = require("express");
const countriesRouter = Router();
const {
  getCurrencyController,
} = require("../controllers/countriesControllers");

countriesRouter.get("/currency/:country", getCurrencyController);

module.exports = countriesRouter;
