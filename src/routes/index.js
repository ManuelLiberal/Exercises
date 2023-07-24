const { Router } = require("express");
const locationsRouter = require("./locationsRouter");
const countriesRouter = require("./countriesRouter");
const usersRouter = require("./usersRouter");
const router = Router();

//*----RUTAS-------

router.use("/locations", locationsRouter);
router.use("/countries", countriesRouter);
router.use("/users", usersRouter);
module.exports = router;
