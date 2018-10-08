const express = require("express");
const app = express();
const port = 3001;

const Cars = require("./controllers/cars");
const Colors = require("./controllers/colors");
const Manufacturers = require("./controllers/manufacturers");

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  const { originalUrl, method } = req;
  console.log(`${method} ${originalUrl}`);
  next();
});

app.get("/cars", Cars.getCars);

app.get("/cars/:carId", Cars.getCar);

app.get("/colors", Colors.getColors);

app.get("/manufacturers", Manufacturers.getManufacturers);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
