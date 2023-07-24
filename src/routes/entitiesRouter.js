const { Router } = require("express");
const entitiesRouter = Router();
const { getInfoController } = require("../controllers/entitiesControllers");

entitiesRouter.get("/info", getInfoController);

module.exports = entitiesRouter;
