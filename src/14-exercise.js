/**
 * Use the built-in `Object.values` method to:
 *
 * 1. Get the values of the `person` object
 * 2. Return the array of values from the function
 */

function exercise14() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
        ocupation: 'developer',
        role: 'sys-admin',
    };
    // Write your solution bellow this line

    let values = Object.values(person);

    return values;
}

module.exports = exercise14;
