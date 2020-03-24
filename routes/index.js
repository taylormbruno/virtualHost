const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('passport');

// API Routes
router.use("/api", apiRoutes); // original use based off prev acitivites

/* GET Google Authentication API. */
router.get("/auth/google",
  passport.authenticate("google", { 
    // scope: ["profile", "email"]
    scope: 'https://www.google.com/m8/feeds'
  })
);

router.get("/auth/google/callback",
  passport.authenticate("google", { 
    failureRedirect: "/", session: false 
  }),
  function(req, res) {
      const token = req.user.token;
      console.log(req.user);
      res.redirect("http://localhost:3000/user?token=" + token);
  }
);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
