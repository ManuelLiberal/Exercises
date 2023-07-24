const { Router } = require("express");
const locationsRouter = require("./locationsRouter");
const countriesRouter = require("./countriesRouter");
const entitiesRouter = require("./entitiesRouter");
const router = Router();

//*----RUTAS-------

router.use("/locations", locationsRouter);
router.use("/countries", countriesRouter);
router.use("/entities", entitiesRouter);

module.exports = router;
