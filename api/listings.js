const router = require("express").Router();
const { Listings } = require("../db/models");

module.exports = router;

router.get("/", function(req, res, next) {
  Listings.findAll()
    .then(listings => res.json(listings))
    .catch(next);
});

router.post("/", (req, res, next) => {
  Listings.create(req.body)
    .then(newListing => {
      res.json(newListing);
    })
    .catch(next);
});

router.put("/products/:id", (req, res, next) => {
  const id = req.params.id;
  Listings.findById(id)
    .then(foundListing => {
      foundListing.update(req.body);
    })
    .then(updatedListing => {
      res.json(updatedListing);
    })
    .catch(next);
});
