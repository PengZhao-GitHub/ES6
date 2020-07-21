// Defalt parameters

function greet($greeting = 'Hello World'){
    console.log($greeting);
}

greet();

// Spread Operator


let args1 = [1,2,3];
let args2 = [5,6,7];

function test(){
    console.log(args1 + ',' + args2 );
}

test();


//Old way to add args as parameters to test()
//test.apply(null, args);

test(...args1, ...args2);


