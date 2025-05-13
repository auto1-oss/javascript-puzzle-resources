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
 * @param {String} propertyName 
 * @param {*} propertyValue 
 * @param {Array} collection 
 */
function filterByProperty(propertyName, propertyValue, collection) {
  if (propertyValue) {
    return collection.filter(function(item) {
      return item[propertyName].toLowerCase() === propertyValue.toLowerCase();
    });
  }

  return collection;
}

module.exports = filterByProperty;
