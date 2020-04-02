const db = require("../models");

module.exports = {
  findAllUsers: function(req, res) {
    db.User.find()
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel);
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
      } else {
        db.User.comparePassword(req.body.password, function(err, match) {
          if (err) {
            console.log("Password does not match");
          } else {
            res.json(match);
          }
        });
      }
    });
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => {
        res.status(200).json(dbModel);
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
    console.log("-----------Req Body---------");
    console.log(req.body);
    db.User.findOne({ externalID: req.body.externalID })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  createExt: function(req, res) {
    console.log("----------63 USER----------");
    console.log(req.body); // fires w. data
    console.log("--------------------");
    // Create an instance of model SomeModel
    const new_user = new db.User(req.body);
    console.log(new_user);
    // Save the new model instance, passing a callback
    new_user.save(function(err) {
      if (err) return handleError(err);
    });
    res.json(new_user);
  },
  ValidateUser: async function(req, res) {
    let fields = {username:[], email:[]}
    await db.User.distinct("username").then(response => {
      fields.username=response;
    });
    await db.User.distinct("email").then(response => {
      fields.email=response;
    });
    res.json(fields);
  }
};
