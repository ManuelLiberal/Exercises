const { Router } = require("express");
const countriesRouter = Router();
const { getCurrencyHandler } = require("../handlers/countriesHandlers");

countriesRouter.get("/currency/:country", getCurrencyHandler);

module.exports = countriesRouter;
