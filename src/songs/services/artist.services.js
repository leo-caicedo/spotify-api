// models
const Artist = require("../models/Artist");

class ArtistServices {
  // list artists
  async getArtists(req, res, next) {
    try {
      const artists = await Artist.find({})
        .populate("albums", { __id: 0, album: 1 })
        .populate("songs", { __id: 0, song: 1 })
        .exec();
      res.json(artists);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ArtistServices;
