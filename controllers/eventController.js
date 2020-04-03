const db = require("../models");

module.exports = {
  findAllEvents: function(req, res) {
    db.Event.find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllEventsByUser: function(req, res) {
    console.log("find events by user",req.params.id);
    db.Event.find({host_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findEventById: function(req, res) {
    console.log("find events by id",req.params.id);
    db.Event.findById(req.params.id)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  searchEvent: function(req, res) {
    console.log(req.body);
    db.Event.find({
      event_name: { $regex: new RegExp(req.body.filterString, "i") }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createEvent: function(req, res) {
    console.log(req.body);
    const new_event = new db.Event(req.body);
    new_event.save(function(err) {
      if (err) console.log(err);
    });
    console.log(new_event);
    res.status(200).json(new_event);
    // db.Event.create(req.body)
    //   .then(dbModel => {
    //     console.log(dbModel);
    //     res.json(dbModel);
    //   })
    //   .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Event.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Event.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
