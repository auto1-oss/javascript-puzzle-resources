/*
 * This file is part of the auto1-oss/javascript-puzzle-resources.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();
const port = 3001;

app.use(express.static(__dirname + "/public"));
app.use(cors());

routes(app);

app.listen(port, function() {
  console.log(`App listening on port ${port}!`);
});
