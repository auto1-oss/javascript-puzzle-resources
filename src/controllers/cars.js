const cars = require("../data/cars");

function getCar(req, res) {
  const car = cars.find(function(eachCar) {
    return eachCar.id == req.params.carId;
  });

  if (car) {
    res.json({ car });
  } else {
    res.sendStatus(404);
  }
};

function getCars(req, res) {
  const {
    brand,
    color,
    price,
  } = req.query;

  res.json({ cars });
}

module.exports = { getCar, getCars };
