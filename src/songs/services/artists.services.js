// models
const Artist = require("../models/Artist");

class ArtistServices {
  // list artists
  async getArtists(req, res, next) {
    try {
      const artists = await Artist.find({})
        .populate("albums", { _id: 0, album: 1 })
        .populate("songs", { _id: 0, song: 1 })
        .exec();
      res.json(artists);
    } catch (err) {
      next(err);
    }
  }

  // get artist
  async getArtist(req, res, next) {
    const { id } = req.params;

    try {
      const artist = await Artist.findById(id)
        .populate("album")
        .populate("songs")
        .exec();
      res.json(artist);
    } catch (err) {
      next(err);
    }
  }

  // create artist
  async createArtist(req, res, next) {
    const { body: artist } = req;

    try {
      const artistCreated = new Artist(artist);
      await artistCreated.save();
      res.status(201).json(artistCreated);
    } catch (err) {
      next(err);
    }
  }

  // update artist
  async updateArtist(req, res, next) {
    const { id } = req.params;
    const { body: artist } = req;

    try {
      const artistUpdated = await Artist.findByIdAndUpdate(id, artist, {
        new: true,
      });
      res.json(artistUpdated);
    } catch (err) {
      next(err);
    }
  }

  // delete artist
  async deleteArtist(req, res, next) {
    const { id } = req.params;

    try {
      await Artist.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ArtistServices;
