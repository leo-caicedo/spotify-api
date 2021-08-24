const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// required routes
const artistsRoutes = require("./songs/routes/artists.routes");
const albumsRouter = require("./songs/routes/albums.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());

  // routes
  app.use("/api/artists", artistsRoutes);
  app.use("/api/albums", albumsRouter);

  return app;
};

module.exports = createApp;
