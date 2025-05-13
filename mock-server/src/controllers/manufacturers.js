/*
 * This file is part of the auto1-oss/javascript-puzzle-resources.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const manufacturers = require("../data/manufacturers");

function getManufacturers(req, res) {
  res.json({ manufacturers });
}

module.exports = { getManufacturers };
