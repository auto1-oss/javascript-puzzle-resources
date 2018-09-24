const filterByProperty = require("../lib/filterByProperty");
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
}

function getCars(req, res) {
  let { brand, color, sort } = req.query;

  let filteredCars = cars;

  filteredCars = filterByProperty('brand', brand, filteredCars);
  filteredCars = filterByProperty('color', color, filteredCars);

  if (['asc', 'des'].includes(sort)) {
    filteredCars = filteredCars.sort(function(a, b) {
      if (sort === 'asc') {
        return a.price - b.price;
      }
      
      return b.price - a.price;
    });
  }

  res.json({ cars: filteredCars });
}

module.exports = { getCar, getCars };
