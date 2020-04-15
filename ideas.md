1. a. devolver `length` de array que recibe como param
   b. crear array con lengths de los array que dejo creados y devolver array
2. devolver el valor de una propiedad de un objeto con dot notation
3. devolver el valor de una propiedad de un objeto con `['propname']`
4. create a method on the `obj` named `logParam` to return the param it receives
5. use `.push()` to add elements to an array
6. use `.pop()` to remove the last element of an array
7. use array native functions
8. store items on the props of an obj

```js
let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running'],
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```

8. use `delete` operator with an object

```js
let anObject = { left: 1, right: 2 };
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log('left' in anObject);
// → false
console.log('right' in anObject);
// → true
```

9. exercise to use `Object.keys` on a provided obj
10. exercise to use `Object.assign` to copy an obj and return the new obj

```js
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

11. create an array of objects and `console.log` the obj values

```js
let journal = [
    {
        events: ['work', 'touched tree', 'pizza', 'running', 'television'],
        squirrel: false,
    },
    {
        events: [
            'work',
            'ice cream',
            'cauliflower',
            'lasagna',
            'touched tree',
            'brushed teeth',
        ],
        squirrel: false,
    },
    {
        events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
        squirrel: true,
    },
    /* and so on... */
];
```

12. edit the value of an object’s prop to observe mutability

```js
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```

13. edit the values of an array to observe mutability
14. (maybe) how `const` works with objects and reassigment
15. use a nested `for of` loop on a matrix to push to an array the values of the matrix

```js
function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]
```

16. exercise with `shift`, `unshift`, `pop` and `push`
17. exercise to return the index in an array with `indexOf`
18. exercise to return a chunk of an array with `slice`
19. exercise to combine two arrays with `concat`
