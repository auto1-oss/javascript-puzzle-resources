/*
 * This file is part of the auto1-oss/javascript-puzzle-resources.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const filterByProperty = require("../lib/filterByProperty");
const paginate = require("../lib/paginate");
const cars = require("../data/cars");

function getCar(req, res) {
  const car = cars.find(function(eachCar) {
    return eachCar.stockNumber == req.params.stockNumber;
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

  filteredCars = filterByProperty('manufacturerName', manufacturer, filteredCars);
  filteredCars = filterByProperty('color', color, filteredCars);

  if (['asc', 'des'].includes(sort)) {
    filteredCars.sort(function(a, b) {
      if (sort === 'asc') {
        return a.mileage.number - b.mileage.number;
      }

      return b.mileage.number - a.mileage.number;
    });
  } else {
    filteredCars.sort(function(a, b) {
      return a.stockNumber - b.stockNumber;
    });
  }

  const itemsPerPage = 10;

  res.json({
    cars: paginate(filteredCars, itemsPerPage, Number(page || 1)),
    totalPageCount: Math.ceil(filteredCars.length / itemsPerPage),
    totalCarsCount: filteredCars.length,
  });
}

module.exports = { getCar, getCars };
