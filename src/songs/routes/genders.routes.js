const { Router } = require("express");

const router = Router();
// dto
const genderDto = require("../dtos/gender.dto");
// middleware
const validationSchema = require("../../middleware/validate-schema");
// services
const GenderServices = require("../services/genders.services");
const genderServices = new GenderServices();

router.get("/", genderServices.getGenders);
router.get("/:id", genderServices.getGender);
router.post("/", genderDto, validationSchema, genderServices.createGender);
router.put("/:id", genderServices.updateGender);
router.delete("/:id", genderServices.deleteGender);

module.exports = router;
