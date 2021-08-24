const { Router } = require("express");

const router = Router();
// dto
const albumDto = require("../dtos/album.dto");
// middleware
const validationSchema = require("../../middleware/validate-schema");
// services
const AlbumServices = require("../services/albums.services");
const albumServices = new AlbumServices();

router.get("/", albumServices.getAlbums);
router.get("/:id", albumServices.getAlbum);
router.post("/", albumDto, validationSchema, albumServices.createAlbum);
router.put("/:id", albumServices.updateAlbum);
router.delete("/:id", albumServices.deleteAlbum);

module.exports = router;
