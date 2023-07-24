const { Router } = require("express");
const locationsRouter = Router();
const {
  getNormalizedStreetHandler,
  getDistanceToObeliskHandler,
} = require("../handlers/locationsHandlers");

locationsRouter.get("/normalizeStreet", getNormalizedStreetHandler);
locationsRouter.get("/distanceToObelisk", getDistanceToObeliskHandler);

module.exports = locationsRouter;
