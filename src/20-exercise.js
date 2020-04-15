/**
 * 1. use the `indexOf()` method of arrays to find the index
 *    of the city named `Lisbon` from the `cities` array
 *    of the city named `Paris` from the `cities` array
 *
 * 2. store both indexes in an array
 * 3. return the array of indexes
 */
function exercise20() {
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];

    let lisbon = cities.indexOf('Lisbon');
    let paris = cities.indexOf('Paris');

    let indexes = [lisbon, paris];

    return indexes;
}

module.exports = exercise20;
