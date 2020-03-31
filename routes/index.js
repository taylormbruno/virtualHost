const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const authRoutes = require("./auth");

// API Routes
router.use("/api", apiRoutes);
router.use("/user", userRoutes); //err
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
router.use("/auth/google", authRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
