const router = require("express").Router();

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
  function(req, res) {
    console.log("auth req\n", req.user.session);
    if (!req.session) {
      res.cookie("token", "");
      // console.log("---No User: req---\n", req);
      console.log("session cookie not set");
      res.redirect("/");
    } else {
      console.log("Hello User \n", req.user.session.profile);
      res.cookie("token", req.user.session.token);
      console.log("---User token ---\n", req.user.session.token);
      console.log("session cookie set");

      res.redirect("http://localhost:3000/user/mydashboard/?extid=" + req.user.session.profile.externalID);
    }
  }
);

module.exports = router;
