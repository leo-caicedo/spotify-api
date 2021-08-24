const { Router } = require("express");

const router = Router();
// dtos
const artistDto = require("../dtos/artist.dto");
// middleware
const validationSchema = require("../../middleware/validate-schema");
// services
const ArtistServices = require("../services/artists.services");
const artistServices = new ArtistServices();

router.get("/", artistServices.getArtists);
router.get("/:id", artistServices.getArtist);
router.post("/", artistDto, validationSchema, artistServices.createArtist);
router.put("/:id", artistServices.updateArtist);
router.delete("/:id", artistServices.deleteArtist);

module.exports = router;
