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
 * @param {Number} max 
 */
function getRandomNumber(max) {
  return Math.round(Math.random() * max)
}

/**
 * @param {Array} collection 
 */
function getRandomItemFromCollection(collection) {
  const max = collection.length - 1;
  const index = getRandomNumber(max);

  return collection[index];
}

module.exports = {
  getRandomNumber,
  getRandomItemFromCollection,
};
