import axios from "axios";

export default {
    registerBeacon: function() {
        axios.post("", {
            "advertisedId": {
                "type": "EDDYSTONE",
                "id": "LyNEVPSRG6n/pgAAAAAAAw=="
            },
            "status": "ACTIVE"
        }).then((res)=> {

        }).catch(err => console.log(err));
    }
}