const router = require("express").Router();
const userController = require("../../../controllers/userController");

// matches /api/dash/+

// router.get("/getexternal", userController.findExt);

// need a different way to redirect. not in controller
// (req,res) => {
//   console.log("Hello User 10\n", req) //fires undefined
// res.redirect("http://localhost:3000/user/mydashboard/?id=")
// });

// router.get("/createexternal", userController.createExt);

router.get("/loaddashboard", userController.findUserById);

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

module.exports = router;
