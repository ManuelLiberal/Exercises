const { Router } = require("express");
const locationsRouter = Router();
const {
  getNormalizedStreetController,
  getDistanceToObeliskController,
} = require("../controllers/locationsControllers");

locationsRouter.get("/normalizeStreet", getNormalizedStreetController);
locationsRouter.get("/distanceToObelisk", getDistanceToObeliskController);

module.exports = locationsRouter;
