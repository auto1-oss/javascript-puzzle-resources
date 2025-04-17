/*
 * This file is part of the auto1-oss/javascript-puzzle-resources.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const carsController = require("./controllers/cars");
const colorsController = require("./controllers/colors");
const manufacturersController = require("./controllers/manufacturers");

module.exports = function routes(app) {
  app.get("/cars", carsController.getCars);
  app.get("/cars/:stockNumber", carsController.getCar);
  app.get("/colors", colorsController.getColors);
  app.get("/manufacturers", manufacturersController.getManufacturers);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
