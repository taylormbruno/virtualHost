const router = require("express").Router();

const passport = require("passport");
const userController = require("../controllers/userController");

//matches /auth/+

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
    console.log("auth req\n",req.profile);
    // const token = req.user.token;
    // req.login(); // fails. not valid
    // console.log("---NEWUSER---\n", req.session.passport.user.profile);
    if (!req.session) {
      res.cookie("token", "");
      // console.log("---No User: req---\n", req);
      res.json({
        status: "session cookie not set"
      });
      res.redirect('/')
      
    } else {
      console.log("Hello User \n", req.session.token);
      res.cookie("token", req.session.token);
      console.log("---User token ---\n", req.session.token);
      res.json({
        status: "session cookie set"
      });
      res.redirect("http://localhost:3000/user/mydashboard/" + req.profile.id);
    }
  }
);

module.exports = router;
