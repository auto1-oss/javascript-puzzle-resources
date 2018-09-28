const filterByProperty = require("../lib/filterByProperty");
const paginate = require("../lib/paginate");
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
  let { manufacturer, color, sort, page } = req.query;

  let filteredCars = cars;

  filteredCars = filterByProperty('manufacturer', manufacturer, filteredCars);
  filteredCars = filterByProperty('color', color, filteredCars);

  if (['asc', 'des'].includes(sort)) {
    filteredCars = filteredCars.sort(function(a, b) {
      if (sort === 'asc') {
        return a.mileage - b.mileage;
      }
      
      return b.mileage - a.mileage;
    });
  }

  const itemsPerPage = 10;

  res.json({
    cars: paginate(filteredCars, itemsPerPage, Number(page || 1)),
    totalPageCount: Math.ceil(filteredCars.length / itemsPerPage)
  });
}

module.exports = { getCar, getCars };
