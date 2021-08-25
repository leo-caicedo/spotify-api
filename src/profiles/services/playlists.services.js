// models
const Playlist = require("../models/Playlist");
const User = require("../models/User");

class PlaylistServices {
  // list playlists
  async getPlaylists(req, res, next) {
    try {
      const playlists = await Playlist.find({})
        .populate("user", {
          _id: 0,
          playlists: 0,
        })
        .populate("songs")
        .exec();
      res.json(playlists);
    } catch (err) {
      next(err);
    }
  }

  // get playlist
  async getPlaylist(req, res, next) {
    const { id } = req.params;

    try {
      const playlist = await Playlist.findById(id)
        .populate("user", { playlists: 0 })
        .populate("songs");
      res.json(playlist);
    } catch (err) {
      next(err);
    }
  }

  // create playlist
  async createPlaylist(req, res, next) {
    const { playlist, user, songs } = req.body;

    try {
      const userFound = await User.findById(user);

      const playlistCreated = new Playlist({
        playlist,
        user: userFound._id,
        songs,
      });
      await playlistCreated.save();

      userFound.playlists = userFound.playlists.concat(playlistCreated._id);
      await userFound.save();

      res.status(201).json(playlistCreated);
    } catch (err) {
      next(err);
    }
  }

  // update playlist
  async updatePlaylist(req, res, next) {
    const { id } = req.params;
    const { body: playlist } = req;

    try {
      const playlistUpdated = await Playlist.findByIdAndUpdate(id, playlist, {
        new: true,
      });
      res.json(playlistUpdated);
    } catch (err) {
      next(err);
    }
  }

  // delete playlist
  async deletePlaylist(req, res, next) {
    const { id } = req.params;

    try {
      await Playlist.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PlaylistServices;
