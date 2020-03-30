const router = require("express").Router();

router.get("/mydashboard", (req, res) => {
    console.log("Hello User 5\n", req.session);
    if (req.session) {
      res.cookie("token", req.session.token);
      console.log("---User token 8---\n", req.session.token);
      res.json({
        status: "session cookie set"
      });
    } else {
      res.cookie("token", "");
      console.log("---No User: 14req---\n", req);
      res.json({
        status: "session cookie not set"
      });
      res.redirect('/')
    }
});

module.exports = router;
