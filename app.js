const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const routes = require("./src/routes/index.js");
const PORT = 3001;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/", routes);

server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});
