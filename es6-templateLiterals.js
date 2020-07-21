let name = 'Peng Zhao';

function makeUppercase(word){
    return word.toUpperCase();
}

//Old way
/*
let template = 
    '<h1>Hello '+ name + '</h1>'+
    '<p>This is a simple tempalte in JavaScript</p>';
*/


let template = 
    `<h1>${makeUppercase('Hello')} ${name} </h1>
    <p>This is a simple tempalte in JavaScript</p>
    `;

document.getElementById('template').innerHTML = template;

