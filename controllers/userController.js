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
<<<<<<< HEAD
    console.log('finding user by id')
    console.log(req.params.id);
    db.User.findById(req.params.id)
=======
    str = req.headers.referer.substring(req.headers.referer.indexOf("=") + 1);
    console.log(str);
    db.User.findById({_id:str})
>>>>>>> 69a6e3a5caa9500366bf4ea33541a818abce80d3
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    console.log(req.body);
    db.User.findOne({ username: req.body.username }, function(err, user) {
      if (user === null) {
        console.log("User not found");
      } else {
        user.comparePassword(req.body.password, function(err, match) {
          if (err) {
            console.log("Password does not match");
          } else {
            console.log(match);
            res.status(200).json(user);
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
  validSignup: async function(req, res) {
    console.log(req.body);
    let unique = {username:false, email:false}
    await db.User.find({username: req.body.username}).then(response => {
      console.log(response);
      if (response.length !== 0) {
        unique.username=false;
      }
      else {
        unique.username=true;
      }
    });
    await db.User.find({email: req.body.email}).then(response => {
      console.log(response);
      if (response.length !== 0) {
        unique.email=false;
      }
      else {
        unique.email=true;
      }
    });
    res.json(unique);

  }
};

