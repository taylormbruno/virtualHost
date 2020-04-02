const router = require("express").Router();
const userController = require("../../../controllers/userController");

// matches /api/dash/+

router.get("/loaddashboard", userController.findUserById);


router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

module.exports = router;
