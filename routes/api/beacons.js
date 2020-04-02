const router = require("express").Router();
const axios = require("axios");
// matches /api/beacons/register

router.post("/register", function(req, res) {
  console.log(req.body)
  axios({
    method: "post",
    url: "https://proximitybeacon.googleapis.com/v1beta1/beacons:register?key=" + proccess.env.API_KEY,
    data: {
      advertisedId: { type: "EDDYSTONE", id: req.body.beaconID },
      status: "ACTIVE",
      expectedStability: "STABLE",
      description: req.body.vendor_name,
    }
  }).then(response => {
    console.log(response);
  });
});

module.exports = router;
