const { Router } = require("express");

const router = Router();
// dto
const { signupDto, signinDto } = require("../dtos/user.dto");
// middleware
const validationSchema = require("../../middleware/validate-schema");
const verifyToken = require("../../middleware/jwt");
// services
const UsersServices = require("../services/users.services");
const userServices = new UsersServices();

router.get("/", userServices.getUsers);
router.get("/:id", userServices.getUser);
router.put("/:id", verifyToken, userServices.updateUser);
router.delete("/:id", verifyToken, userServices.deleteUser);

// auth
router.post("/signup", signupDto, validationSchema, userServices.signup);
router.post("/signin", signinDto, validationSchema, userServices.singin);

module.exports = router;
