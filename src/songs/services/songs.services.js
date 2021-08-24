// models
const Song = require("../models/Song");

class SongServices {
  // list songs
  async getSongs(req, res, next) {
    try {
      const songs = await Song.find({})
        .populate("artist", {
          _id: 0,
          artist: 1,
        })
        .populate("album", { _id: 0, album: 1 })
        .populate("gender", { _id: 0, gender: 1 })
        .exec();
      res.json(songs);
    } catch (err) {
      next(err);
    }
  }

  // get song
  async getSong(req, res, next) {
    const { id } = req.params;

    try {
      const song = await Song.findById(id)
        .populate("artist")
        .populate("album")
        .populate("gender")
        .exec();
      res.json(song);
    } catch (err) {
      next(err);
    }
  }

  // create song
  async createSong(req, res, next) {
    const { body: song } = req;

    try {
      const songCreated = new Song(song);
      await songCreated.save();
      res.status(201).json(songCreated);
    } catch (err) {
      next(err);
    }
  }

  // update song
  async updateSong(req, res, next) {
    const { id } = req.params;
    const { body: song } = req;

    try {
      const songUpdated = await Song.findByIdAndUpdate(id, song, {
        new: true,
      });
      res.json(songUpdated);
    } catch (err) {
      next(err);
    }
  }

  // delete song
  async deleteSong(req, res, next) {
    const { id } = req.params;

    try {
      await Song.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SongServices;
