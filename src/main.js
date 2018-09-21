//async function with await and fetch
async function fetchAsync () {
 
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  let data = await response.json();

  return data;
}


fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))

//Object Destructing

let movieName = {name: "PK", actor: "Amir Khan"};
let {name: foo, actor: bar} = movieName;
 
console.log(foo);  
console.log(bar);

//Object Shorthand

let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {
  cat,
  dog,
  bird
}

console.log(someObject);