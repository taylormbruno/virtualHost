const router = require("express").Router();
const userController = require("../controllers/userController");
const passport = require("passport");
const axios = require("axios");

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
      const userString = JSON.stringify(req.user.session.profile);
      console.log(userString);
      console.log("finding user");
      axios({
        method: "post",
        url: "http://localhost:3000/auth/google/find",
        data: req.user.session.profile
      }).then(
        response => {
          if (response.data === null) {
            console.log("creating user");
            axios({
              method: "post",
              url: "http://localhost:3000/auth/google/create",
              data: req.user.session.profile
            }).then(response => {
              console.log(response.data);
              res.redirect(
                "http://localhost:3000/user/mydashboard/?q=" + response.data._id
              );
            });
          } else {
            console.log(response.data);
            res.redirect(
              "http://localhost:3000/user/mydashboard/?q=" + response.data._id
            );
          }
        },
        error => {
          console.log(error);
          res.redirect("http://localhost:3000/");
        }
      );
    }
  }
);

module.exports = router;
