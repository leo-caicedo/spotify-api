const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// required routes
const artistRoutes = require("./songs/routes/artists.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());

  // routes
  app.use("/api/artists", artistRoutes);

  return app;
};

module.exports = createApp;
