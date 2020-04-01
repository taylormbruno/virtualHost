const db = require("../models");

module.exports = {
  findVendorsByEvent: function(req, res) {
    console.log("Finding all vendors\n", req.headers.referer);
    str = req.headers.referer.substring(req.headers.referer.indexOf("=") + 1);
    console.log(str);
    db.Vendor
    // changed this
      .find({event_id: str})
      // .find()
      .then(dbModel => {console.log(dbModel); res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },
  findVendorById: function(req, res) {
    str = req.headers.referer.substring(req.headers.referer.indexOf("=") + 1);
    db.Vendor
      .findById({_id:str})
      .then(dbModel => {console.log(dbModel)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));      
  },
  searchVendor: function(req, res) {
    console.log(req.body);
    db.Vendor
      .find({"vendor_name": {$regex : new RegExp(req.body.filterString, 'i') }, "event_id": req.body.eventID})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Vendor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Vendor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Vendor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
