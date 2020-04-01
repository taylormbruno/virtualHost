const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users/" +

router.post("/signup", userController.create);

router.get('/login', userController.login);

router.get("/auth", userController.findExt);

router.post("/create/ext", userController.ExtCreate);

module.exports = router;