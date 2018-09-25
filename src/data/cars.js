const Random = require("../lib/random");

const colors = require("./colors");
const brands = require("./brands");

const cars = [];

for (var i = 0; i < 1000; i++) {
  cars.push({
    id: i,
    brand: Random.getRandomItemFromCollection(brands),
    color: Random.getRandomItemFromCollection(colors),
    price: Random.getRandomNumber(100000),
    year: Random.getRandomNumber(60) + 1958, // 1958 to 2018
    picture_url: 'http://localhost:3001/car.svg'
  });
}

module.exports = cars;
