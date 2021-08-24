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
  async getArtist(req, res) {
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
}

module.exports = ArtistServices;
