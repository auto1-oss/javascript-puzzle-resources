const express = require("express");
const app = express();
const port = 3001;

const Cars = require("./controllers/cars");

app.use(function(req, res, next) {
  const { originalUrl, method } = req;
  console.log(`${method} ${originalUrl}`);
  next();
});

app.get("/cars", Cars.getCars);

app.get("/cars/:carId", Cars.getCar);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
