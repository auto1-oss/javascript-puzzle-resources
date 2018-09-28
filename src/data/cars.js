const Random = require("../lib/random");

const colors = require("./colors");
const manufacturers = require("./manufacturers");

const cars = [];

for (var i = 0; i < 1000; i++) {
  const manufacturer = Random.getRandomItemFromCollection(manufacturers);

  const model = Random.getRandomItemFromCollection(manufacturer.models);
  const stockNumber = Random.getRandomNumber(89999) + 10000;
  const color = Random.getRandomItemFromCollection(colors);
  const mileage = Random.getRandomNumber(99999) + 100000;
  const fuelType = Random.getRandomItemFromCollection(['Petrol', 'Diesel']);

  cars.push({
    id: i,
    manufacturer: manufacturer.name,
    model,
    stockNumber,
    mileage,
    fuelType,
    color,
    picture_url: 'http://localhost:3001/car.svg'
  });
}

module.exports = cars;
