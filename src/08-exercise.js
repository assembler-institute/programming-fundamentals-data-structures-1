/**
 * Use the built in `find()` method of arrays to:
 *
 * 1. find the city "Berlin"
 * 2. save it in a variable
 * 3. return the variable
 */
function exercise08() {
    const cities = ['Barcelona', 'Madrid', 'Lisbon', 'Berlin', 'Paris'];

    // Write your solution bellow this line
    let found = cities.find((name) => name === 'Berlin');

    return found;
}

module.exports = exercise08;
