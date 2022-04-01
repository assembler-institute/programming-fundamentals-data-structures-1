/**
 * Use the built in `find()` method of arrays to:
 *
 * 1. Find the city "Berlin"
 * 2. Save it in a variable
 * 3. Return the variable
 */

function exercise08() {
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];
    // Write your solution bellow this line
    let found = cities.find((name) => name === 'Berlin');

    return found;
}

module.exports = exercise08;
