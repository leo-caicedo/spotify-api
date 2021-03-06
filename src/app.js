const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// required routes
const artistsRoutes = require("./songs/routes/artists.routes");
const albumsRouter = require("./songs/routes/albums.routes");
const gendersRoutes = require("./songs/routes/genders.routes");
const songsRoutes = require("./songs/routes/songs.routes");
const usersRoutes = require("./profiles/routes/users.routes");
const playlistsRoutes = require("./profiles/routes/playlists.routes");

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());

  // routes
  app.use("/api/artists", artistsRoutes);
  app.use("/api/albums", albumsRouter);
  app.use("/api/genders", gendersRoutes);
  app.use("/api/songs", songsRoutes);
  app.use("/api/users", usersRoutes);
  app.use("/api/playlists", playlistsRoutes);
  app.get("/", (req, res) => {
    res.redirect("/api/artists");
  });

  return app;
};

module.exports = createApp;
