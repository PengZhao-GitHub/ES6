// Immediately resovled

let myPromise = Promise.resolve('Foo');

myPromise.then(res => console.log(res));

// Formal promise strucure
//------------------------------------------------
let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 2000);
});

myPromise1.then(res => {
    res += 3;
    console.log(res);
})


// Get API
// -----------------------------------------------
function getData(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        }
        xhr.send();
    })
}

getData('GET', 'https://jsonplaceholder.typicode.com/todos')
.then(function(data){
    console.log(data);
    let todos = JSON.parse(data); //Covert string to object
    let output = '';
    todos.forEach(todo => {
        output += `
            <div>
                <h3> ${todo.title} </h3>
                <p>Completed: ${todo.completed} </p>
            </div>
        `
    })
    document.getElementById('template').innerHTML = output;
})
.catch(function(err){
    console.log(err);
})