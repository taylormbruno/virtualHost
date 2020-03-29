const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("passport");
const userController = require("../controllers/userController");
// API Routes
router.use("/api", apiRoutes);

// GET Google Authentication API.
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: "https://www.googleapis.com/auth/userinfo.profile"
  })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: true
  }),
  function(req, res) {
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
    // console.log("---NEWUSER---\n", req.session.passport.user.profile);
    res.redirect("http://localhost:3000/mydashboard/" + req.user.profile.id);
  }
);

router.get("/mydashboard/:id", (req, res) => { // no console logs fire
  console.log("Hello User");
  if (req.session) {
    res.cookie("token", req.session.token);
    console.log("---User token---\n", req.session.token);
    res.json({
      status: "session cookie set"
    });
  } else {
    res.cookie("token", "");
    console.log("---No User: req---\n", req);
    res.json({
      status: "session cookie not set"
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;
  res.redirect("/");
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
