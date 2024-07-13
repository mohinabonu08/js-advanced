'use strict'
// destructuring
//  array bilan misol
// const nums = [10, 15, 20, 25];

// const [num1, num2] = nums;
// console.log(num1, num2);

// const [firstValue, ...otherValues] = nums;
// console.log(firstValue);
// console.log(otherValues);


// // object bilan misol
// const person = { name: 'Ulugbek', lastname: 'Samigjonov', age: 25 };

// const { lastname,age } = person
// console.log(lastname, age);

// const { name, ...otherProperties } = person;
// console.log(name);
// console.log(otherProperties);

// rest
// const total = (...numbers) => {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
//     }
//     total(10, 15, 20, 25);
//     const [first, ...otherValues] = [10, 15, 20, 25];
//     console.log(first); // 10
//     console.log(otherValues); // [15, 20, 25]
// const { name, ...otherProperties } = {
// name: 'Ulugbek',
// age: 25,
// job: 'Software Engineer'
// };
// console.log(name); // 'Ulugbek'
// console.log(otherProperties); // { age: 25, job: 'Software Engineer' }

// spread
// const numbers = [10, 15, 20];
// const max = Math.max(...numbers); // Math.max(10, 15, 20);
// console.log(max);

// const array1 = [10, 15, 20];
// const array2 = [...array1, 25, 30]; // [10, 15, 20, 25, 30]

// console.log(array2);

// const person = { name: 'Ulugbek', age: 25 };
// const personWithJob = { ...person, job: 'Software Engineer' }; // { name: 'Ulugbek', age: 25, job: 'Software Engineer' };
// console.log(personWithJob);


// short-circut ,nullish and optional chaining

// short-circut or
// console.log(true || false); // true
// console.log(10 || 'Ulugbek'); // 10
// console.log('' || 'Ulugbek'); // Ulugbek
// console.log(true || 0); // true
// const person = {
// name: 'Ulugbek',
// age: 25
// }

// short-circut and
// console.log(true && false); // false
// console.log(0 && 'Ulugbek'); // 0
// console.log('' && 'Ulugbek'); //
// console.log(true && null); // null
// const person = {
// name: 'Ulugbek',
// age: 25
// };
// console.log(person.job && 'Person has a job');

// nullish
// const subject = '';
// const emailSubject = subject ?? 'A default subject';

// optional chaining
// const person = {
//     name: 'Ulugbek',
//     age: 25
//     };
//     const companyName = person.job?.companyName;
//     console.log(companyName);
//     console.log(person.study?.());


// maps & sets

// Map
// const myMap = new Map();
// myMap.set('firstname', 'Ulugbek');
// myMap.set('lastname', 'Samigjonov');
// myMap.set('age', 25);
// console.log(myMap.get('firstname'));
// myMap.set('job', 'Software Engineer');
// console.log(myMap.get('job'));
// console.log(myMap.size);
// myMap.delete('lastname');
// console.log(myMap.size);

// Set
// const mySet = new Set();
// mySet.add(10); // Set(1) { 10 }
// mySet.add(15); // Set(2) { 10, 15 }
// mySet.add(15); // Set(2) { 10, 15 }
// mySet.add('Ulugbek'); // Set(3) { 1, 5, 'Ulugbek' }
// const person = { age: 25, job: 'Software Engineer' };
// mySet.add(person);
// console.log(mySet);
// mySet.add({ age: 25, job: 'Software Engineer' });
// console.log(mySet.has(10)); // true
// console.log(mySet.has(11)); // false
// console.log(mySet.has(person)); // true
// console.log(mySet.size); // 5
// mySet.delete(10);
// console.log(mySet.has(10)); // false


// event loop

// function greet() {
//     return "Hello";
//     }
//     function respond() {
//     return setTimeout(() => {
//     return "Hey!";
//     }, 1000);
//     };
//     greet();
//     respond();


// hoisting and tdz
// // var
// console.log(firstname);
// var firstname = 'Ulugbek';
// console.log(firstname);
// console.log(lastname); // Xato yuzaga keladi
// // let va const
// console.log(firstname);
// let firstname = 'Ulugbek';

// Function hoisting
// displayFirstname(); // "Ulugbek"
// function displayFirstname() {
// console.log('Ulugbek');
// }


// hof

// Funksiyani argument sifatida berib yuborish
// const isEven = (num) => num % 2 === 0;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);
// Funksiyaning funksiya qaytarish holati
// const add = (x) => (y) => x + y;
// const result = add(10)(15);
// console.log(result);

// Soliq hisoblab beruvchi funksiya
// function createTaxCalculator(taxRate) {
//     return function(productPrice) {
//     return productPrice * taxRate;
//     };
//     }
//     const educationTax = createTaxCalculator(0.05); // 5% tax
//     const transportationTax = createTaxCalculator(0.2); // 20% tax
//     const foodTax = createTaxCalculator(0.1); // 10% tax
//     console.log(educationTax(1000))
