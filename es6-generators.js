
function *g1(){
    console.log('Hello');
    yield 'Yield 1 Ran..';
    console.log('World');
    yield 'Yield 2 Ran ..';
    
    return 'Returned ...';
}

g1(); //Nothing will show

let g = g1();

/*
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());
*/
//console.log(g.next().value);

for(let val of g){
    console.log(val);
}

console.log(Object.values({ prop1: 1, prop2: 2}));
console.log(Object.entries({ prop1: 1, prop2: 2}));