const { Router } = require("express");
const usersRouter = Router();
const { getInfoHandler } = require("../handlers/usersHandlers");

usersRouter.get("/info", getInfoHandler);

module.exports = usersRouter;
