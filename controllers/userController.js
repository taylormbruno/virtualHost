const db = require("../models");

module.exports = {
  findAllUsers: function(req, res) {
    db.User
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUserById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    db.User
      .findOne({username:req.body.username}, function(err, user) {
        if(user === null) {
          const error = "User not found";
          console.log(error);
        }
        else {
          user.comparePassword(req.body.password, function(err, match) {
            if (err) {
              console.log("Password does not match");
            }
            else {
              console.log(user);
              res.json(user);
            }
          });
        }
      });
  },
  create: function(req, res) {
    console.log("creating new user", req); // does not fire
    // UNCOMMENT CODE BELOW TO ADD TO DB. DISABLED WHILE TESTING ROUTES
    // db.User
    //   .create(req.body)
    //   .then(dbModel => {
    //     console.log(dbModel);
    //     res.redirect('/login');
    //   })
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
