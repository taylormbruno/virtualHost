const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users/" +

router.post("/signup", userController.create);

router.post('/login', userController.login);

router.post("/validate", userController.validSignup);

router.get('/findbyid/:id', userController.findUserById);

router.put('/update/favs', userController.updateFavs)
router.put('/update/notes', userController.updateNotes)


module.exports = router;