const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/", userController.postEmail);

// router.get("/", usersNightController.getUsersNight);
// router.get("/me", usersNightController.getUserData);
// router.get("/:userNightById", usersNightController.getUserNightById);
// router.delete("/:userNightById", usersNightController.deleteUserNightById);
// router.post("/", usersNightController.registerUserNight);
// router.post ("/login", usersNightController.login);
// router.post("/booking", usersNightController.localBooking);
// router.patch("/:userNightById", usersNightController.editUser);
// router.post("/:userNightById/update", usersNightController.updateAvatar);

module.exports = router;