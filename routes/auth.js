const router = require("express").Router();

const passport = require("passport");
const userController = require("../controllers/userController");

//matches /auth/+

// GET Google Authentication API.
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // next();
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: "https://www.googleapis.com/auth/userinfo.profile"
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: true
  }),
  function(req, res) {
    console.log("Creating User")
    req.session.token = req.user.token;
    // const token = req.user.token;
    userController.create({
      body: {
        first_name: req.user.profile.name.givenName,
        last_name: req.user.profile.name.familyName,
        externalUser: true,
        externalID: req.user.profile.id
      }
    });
    req.login();
    // console.log("---NEWUSER---\n", req.session.passport.user.profile);
    res.redirect("http://localhost:3000/user/mydashboard");
  }
);

module.exports = router;
