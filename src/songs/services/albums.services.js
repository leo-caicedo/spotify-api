// models
const Album = require("../models/Album");
const Artist = require("../models/Artist");

class AlbumServices {
  // list albums
  async getAlbums(req, res, next) {
    try {
      const albums = await Album.find({})
        .populate("artist", { _id: 0, artist: 1 })
        .populate("songs", { _id: 0, song: 1 })
        .exec();
      res.json(albums);
    } catch (err) {
      next(err);
    }
  }

  // get album
  async getAlbum(req, res, next) {
    const { id } = req.params;

    try {
      const album = await Album.findById(id)
        .populate("artist")
        .populate("songs")
        .exec();
      res.json(album);
    } catch (err) {
      next(err);
    }
  }

  // create album
  async createAlbum(req, res, next) {
    const { album, artist, songs } = req.body;

    try {
      const artistFound = await Artist.findById(artist);

      const albumCreated = new Album({
        album,
        artist: artistFound._id,
        songs,
      });
      await albumCreated.save();

      artistFound.albums = artistFound.albums.concat(albumCreated._id);
      await artistFound.save();

      res.status(201).json(albumCreated);
    } catch (err) {
      next(err);
    }
  }

  // update album
  async updateAlbum(req, res, next) {
    const { id } = req.params;
    const { body: album } = req;

    try {
      const albumUpdated = await Album.findByIdAndUpdate(id, album, {
        new: true,
      });
      res.json(albumUpdated);
    } catch (err) {
      next(err);
    }
  }

  // delete album
  async deleteAlbum(req, res, next) {
    const { id } = req.params;

    try {
      await Album.findByIdAndDelete(id);
      res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AlbumServices;
