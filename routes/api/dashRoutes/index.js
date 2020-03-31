const router = require("express").Router();

// matches /api/dash/+

router.get("/getexternal", (req,res) => {
  console.log("Hello User 10\n", req)
});

router.get("/loaddashboard", (req, res) => {
  console.log("Hello User 15\n", req);
});


router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

module.exports = router;

