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
  findExt: function(user) {
    console.log("controller request\n", user);
    db.User.find({ externalID: user.externalID })
      .then(async dbModel => {
        if (dbModel === undefined || []) {
          console.log("User is undefined.");
          console.log(user);
          await this.createExt(user);
        } else {
          console.log("USER"); //undefined
          console.log(dbModel);
          res.json(dbModel);
        }
      })
      .catch(err => console.log("ERROR", err));
    // res.status(422).json(err));
  },
  createExt: async function(user) {
    console.log('USER FROM SESSION');
    console.log(user);
    await db.User.create(user)
    .then(dbModel => {
      console.log(dbmodel); //does not log
      res.json(dbModel);
    })
    .catch(err => res.status(422).json(err));

  }
};

// req.headers.cookie to get user cookies from controller request
