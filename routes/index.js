const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require('passport');


// API Routes
router.use("/api", apiRoutes);

// GET Google Authentication API.
router.get('/auth/google', 
  passport.authenticate('google', {
    scope: 'https://www.googleapis.com/auth/userinfo.profile'
  })
);
// router.get("/auth/google",
//   passport.authenticate("google", { 
//     // scope: ["profile", "email"]
//     scope: 'https://www.google.com/m8/feeds'
//   })
// );
router.get("/auth/google/callback",
  passport.authenticate("google", { 
    failureRedirect: "/", session: false 
  }),
  function(req, res) {
      req.session.token = req.user.token;
      const token = req.user.token;
      console.log(req.user);
      res.redirect("http://localhost:3000/user");
  }
);
router.get('/user', (req, res) => {
  console.log('Hello User');
  if (req.session) {
      res.cookie('token', req.session.token);
      console.log('---User token---\n', req.session.token);
      res.json({
          status: 'session cookie set'
      });
  } else {
      res.cookie('token', '');
      console.log('---No User: req---\n', req);
      res.json({
          status: 'session cookie not set'
      });
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
