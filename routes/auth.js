const router = require("express").Router();
const userController = require("../controllers/userController");
const passport = require("passport");

//matches /auth/google+

// GET Google Authentication API.

router.get(
  "/",
  passport.authenticate("google", {
    scope: "https://www.googleapis.com/auth/userinfo.profile"
  })
);

router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: true
  }),
  async function(req, res) {
    console.log("auth req\n", req.user.session);
    if (!req.user.session) {
      res.cookie("session", "");
      console.log("session cookie not set");
    } else {
      res.cookie("token", req.user.session.token);
      console.log("session cookie set");

      res.redirect(
        "http://localhost:3000/auth/?id=" + req.user.session.profile.externalID
      );
    }
  }
);

module.exports = router;
