/**
 * Use the built-in `Object.keys` method to:
 *
 * 1. get the keys of the `person` object
 * 2. return the array of keys from the function
 */
function exercise13() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
        ocupation: 'developer',
        role: 'sys-admin',
    };

    // Write your solution bellow this line

    let keys = Object.keys(person);

    return keys;
}

module.exports = exercise13;
