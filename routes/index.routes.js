const express = require("express");
const router = express.Router();
const Query = require("../models/Query.model");


router.post("/queries", (req, res, next) => {
  const {name, email, subject} = req.body
  const newQuery = {
      name,
      email,
      subject
  }
  Query.create(newQuery)
  .then((query) => {
      res.status(201).json(query);
  })
  .catch((err) => {
      console.log("Failed to create query -> " + err);
      next({...err, message: "Failed to create query"});
  });
})
;

module.exports = router;
