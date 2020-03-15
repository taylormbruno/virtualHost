const path = require("path");
const router = require("express").Router();
//  CODE BELOW DISABLED WHILE TESTING ROUTES
// const apiRoutes = require("./api");
const userController = require("../controllers/userController");

// API Routes
// router.use("/api", apiRoutes); // original use based off prev acitivites

// code attempt to call the route directly #1 did not work
router.use('/api/user/signup')
  .post(userController.create);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
