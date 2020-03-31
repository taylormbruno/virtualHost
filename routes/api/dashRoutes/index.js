const router = require("express").Router();
const userController = require("../../../controllers/userController");

// matches /api/dash/+

router.get("/getexternal", (req,res) => {
  console.log("Hello User 10\n", req.session)
  userController.findExt;
  // res.redirect("http://localhost:3000/user/mydashboard/?id=")
});

router.get("/loaddashboard", (req, res) => {
  // console.log("Hello User 15\n", req);
});

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

module.exports = router;

