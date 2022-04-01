/**
 * Use the built in `map()` method of arrays to:
 *
 * 1. Use the array `nameLengths` to store a value for each
 * element in the 'cities' array, according to:
 *
 * - If the city's name length is less than 8 characters: `short name`
 * - If the city's name length is greater than 8 characters: `long name`
 *
 * 2. The original `cities` array should not be modified
 */

function exercise09() {
    const cities = ['Barcelona', 'Sevilla', 'Tarragona', 'Berlin', 'Paris'];
    let nameLengths = [];
    // Write your solution bellow this line
    nameLengths = cities.map(function (name) {
        if (name.length < 8) {
            return 'short name';
        } else if (name.length > 8) {
            return 'long name';
        }
    });


    // Don’t change the code bellow this line
    return {
        cities: cities,
        nameLengths: nameLengths,
    };
}

module.exports = exercise09;
