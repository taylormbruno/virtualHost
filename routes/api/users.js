const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users/signup"
router.post("/signup", userController.create);
// router.post('/signup',userController.create, (req,res) => console.log(req));

module.exports = router;