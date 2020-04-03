const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users/" +

router.post("/signup", userController.create);

router.post('/login', userController.login);

router.post("/validate", userController.validSignup);

<<<<<<< HEAD
router.get('/findbyid/:id', userController.findUserById);
=======
router.post("/ID", userController.findUserById);
>>>>>>> 69a6e3a5caa9500366bf4ea33541a818abce80d3

module.exports = router;