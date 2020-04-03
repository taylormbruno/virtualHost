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

router.use(function(req, res) {
  // If no API routes are hit, send the React app
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  } else {
      res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
  }
});

module.exports = router;
