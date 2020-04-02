const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users/" +

router.post("/signup", userController.create);

router.get('/login', userController.login);

router.get("/validate", userController.ValidateUser);

module.exports = router;