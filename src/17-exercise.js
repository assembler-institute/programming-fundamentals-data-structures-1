/**
 * Use the built-in `Object.assign` method to:
 *
 * 1. Create a copy of the person object
 *    and store it in the `copy` object
 * 
 * 2. Add the properties:
 *    ocupation: 'developer'
 *    role: 'sys-admin'
 *
 * 3. Return the copy object
 */

function exercise17() {
    const person = {
        firstname: 'Mark',
        lastname: 'Gulman',
        age: 34,
    };
    
    let copy = {};
    // Write your solution bellow this line
    Object.assign(copy, person, {
        ocupation: 'developer',
        role: 'sys-admin',
    });

    return copy;
}

module.exports = exercise17;
