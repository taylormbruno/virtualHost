const router = require("express").Router();

router.get("/mydashboard/", (req, res) => {
  if (req.session) {
    res.cookie("token", req.session.token);
    res.json({
      status: "session cookie set"
    });
  } else {
    res.cookie("token", "");
    res.json({
      status: "session cookie not set"
    });
    res.redirect('/')
  }
});

module.exports = router;
