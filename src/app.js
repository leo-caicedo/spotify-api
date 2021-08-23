const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());

  return app;
};

module.exports = createApp;
