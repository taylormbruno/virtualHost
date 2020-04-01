const db = require("../models");

module.exports = {
  findAllUsers: function(req, res) {
    db.User.find()
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel);
        // console.log(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findUserById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    db.User.findOne({ username: req.body.username }, function(err, user) {
      if (user === null) {
        const error = "User not found";
        // console.log(error);
      } else {
        db.User.comparePassword(req.body.password, function(err, match) {
          if (err) {
            console.log("Password does not match");
          } else {
            // console.log(match);
            res.json(match);
          }
        });
      }
    });
  },
  create: function(req, res) {
    // console.log("----creating new user----\n", req); // fires on postman and browser to local host 3000
    db.User.create(req.body)
      .then((dbModel, err) => {
        // console.log("---dbModel---\n", dbModel); // fires on postman and browser
        if (dbModel.externalUser === true) {
          return dbModel;
        } else res.status(200).json(dbModel);
      })
      .catch(err => console.log(err));
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findExt: function(req, res) {
    console.log("controller request\n", req.body); // fires w. data
    db.User.find({ externalID: req.body.externalID })
      .then(dbModel => {
        if (dbModel === undefined || []) {
          console.log("62 User is undefined."); // fires
          res.json({ error: "user not found" });
        } else {
          console.log("USER");
          console.log(dbModel);
          res.json(dbModel);
        }
      })
      .catch(err => res.status(422).json(err));
  },
  createExt: function(req, res) {
    console.log("73 USER");
    console.log(req.body); // fires w. data
    db.User.create(req.body)
      .then((dbModel) => {
        console.log("USER"); 
        console.log(dbModel);
        if (dbModel === undefined || []) {
          console.log("User is undefined."); 
          res.json({ error: "user not found" });
        } else {
          res.json(dbModel);
        }
      })
      .catch(err => console.log(err));
  }
};

// req.headers.cookie to get user cookies from controller request
