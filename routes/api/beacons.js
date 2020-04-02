const router = require("express").Router();
const axios = require("axios");

router.post("/register", function(req, res) {
  axios({
    method: "post",
    url: "http://localhost:3000/auth/google/find",
    data: {
      advertisedId: { type: "EDDYSTONE", id: "Fr4Z98nSoW0hgAAAAAAAAg==" },
      status: "ACTIVE",
      expectedStability: "STABLE",
      description: "An example beacon.",
      properties: { position: "entryway" }
    }
  }).then(response => {});
});

module.exports = router;
