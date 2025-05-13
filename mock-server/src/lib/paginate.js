/*
 * This file is part of the auto1-oss/javascript-puzzle-resources.
 *
 * (c) AUTO1 Group SE https://www.auto1-group.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 
 * @param {Array} collection 
 * @param {Number} itemsPerPage 
 * @param {Number} page 
 */
function paginate(collection = [], itemsPerPage = 10, page = 1) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return collection.slice(start, end);
}

module.exports = paginate;
