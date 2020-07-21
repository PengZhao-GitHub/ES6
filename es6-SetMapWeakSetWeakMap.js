//Set -> individual values collection

let myArray = [11, 22, 34, 65, 34];
let mySet = new Set(myArray);
console.log(myArray, mySet);

mySet.add('100');
mySet.add({ a: 1, b: 2 });

console.log(mySet.has(22));

mySet.delete(22);

//mySet.clear();


console.log(mySet.size);


mySet.forEach(function (val) {
    console.log(val);
})

//Map: Key Value pair

let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);

myMap.set('c3', 'Foo');
myMap.delete('a1'); //delete by the key


console.log(myMap);
console.log(myMap.size);

// weak set -> Value is object
let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}


let car2 = {
    make: 'Toyota',
    model: 'Camry'
}


carWeakSet.add(car1);
carWeakSet.add(car2);

console.log(carWeakSet);

carWeakSet.delete(car1);

console.log(carWeakSet);

// Weak map -> Key and Value are objects

let carWeakMap = new WeakMap();

let key1 = {
    id: 1,
    key: 'My key'
}

carWeakMap.set(key1, car1);

console.log(carWeakMap);


carWeakMap.delete(key1);

console.log(carWeakMap);
