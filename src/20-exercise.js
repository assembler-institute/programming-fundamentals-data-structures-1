/**
 * 1. Use the `indexOf()` method of arrays to find the index:
 *    - Of the city named `Lisbon` from the `cities` array
 *    - Of the city named `Paris` from the `cities` array
 *
 * 2. Store both indexes in an array
 * 
 * 3. Return the array of indexes
 */

function exercise20() {
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];

    let lisbon = cities.indexOf('Lisbon');
    let paris = cities.indexOf('Paris');

    let indexes = [lisbon, paris];

    return indexes;
}

module.exports = exercise20;
