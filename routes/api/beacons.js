const router = require("express").Router();
const axios = require("axios");
// matches /api/beacons/ +

router.post("/register", function (req, res) {
  console.log("registering beacons");
  console.log(req);
  axios({
    method: "post",
    url:"https://proximitybeacon.googleapis.com/v1beta1/beacons:register?key="+proccess.env.API_KEY,
    data: {
      advertisedId: { type: "EDDYSTONE", id: req.body.beacon_id },
      status: "ACTIVE",
      expectedStability: "STABLE",
      description: req.body.vendor_name,
    }
  }).then((response) => {
    console.log("beacon response");
    console.log(response);
  });
});

module.exports = router;
