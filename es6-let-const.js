//At global level, var and let are same

var a = 'Test1';
let b = 'Test2';

console.log(a);
console.log(b);


// Let is only used in the block of code, but var is global
function testVar(){
    var a1 = 30; 
    if(true){
        var a1 = 50;
        console.log(a1);
    }
    console.log(a1);
}

testVar();


function testLet(){
    let a1 = 30; 
    if(true){
        let a1 = 50;
        console.log(a1);
    }
    console.log(a1);
}

testLet();

for(var i = 0; i < 10; i++){
    console.log(i);
}

console.log(i); //you can still check i;


for(let j = 0; j < 10; j++){
    console.log(j);
}

//console.log(j); //you cannot access j;



const colors = [];

colors.push('red');
colors.push('blue');

console.log(colors);

// colors = 'Green';  //Uncaught TypeError: Assignment to constant variable.

