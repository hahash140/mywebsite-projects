/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
let FirstName = "Goat";
console.log(FirstName);*/
/*let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
let firstName;
firstName = "Albert";
console.log(typeof firstName);
let age = 40;
age = 30;
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
// Test case 2
markMass = 95;
markHeight = 1.88;
johnHeight = 1.76;
johnMass = 85;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log("BMI=" + " " + markBMI);
console.log(johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
let firstName = "Beulah";
const job = "student";
let birthyear = 2007;
const year = 2022;
let value = 5 > 4;

const jonasNew = `I'm ${firstName} a ${year - birthyear} year old ${job}`;
console.log(jonasNew);
const introduction = `I am Albert, a ${
  year - birthyear
} year old young man and I also am an ${job}`;
console.log(introduction);
const beulah = `My Sister is ${firstName}, a first year 
${job} of Wesley girts senior High school.
I am ${year - birthyear} years old. 
this is ${value}`;
console.log(beulah);

firstName = "Karen";
birthyear = 2008;

const karen = `My Sister is ${firstName} and she is ${
  year - birthyear
} years old 
`;
console.log(karen);*/
/*const age = 12;
if (age >= 18) {
  console.log("Sarah can start drivers licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young
She should wait for ${yearsLeft} more years`);
}
birthYear = 2002;
let century;
if (birthYear <= 2000) {
  century = 20;
  console.log(`You were born in the ${century}th century`);
}
// console.log("Sarah was born in 20th century");
else {
  century = 21;
  console.log(`You were born in the ${century}st century`);
}
let category;
let albert = 30;
if (albert <= 20) {
  category = "underage";
  4;
  console.log(category);
} else {
  category = "overage";
  console.log(category);
}
if (albert <= 20) {
  console.log("blue");
} else {
  console.log("red");
}*/
markMass = 95;
markHeight = 1.88;
johnHeight = 1.76;
johnMass = 85;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
if (markBMI > johnBMI) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI})`);
}
// type conversion and cohersion
console.log(Number("DOG"));

const myAge = 23;
const humanDogRatio = 7;
const myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

let bonusPoints = 50;
console.log(bonusPoints);
bonusPoints = bonusPoints + 50;
console.log(bonusPoints);
bonusPoints = bonusPoints - 75;
console.log(bonusPoints);
bonusPoints = bonusPoints + 45;
console.log(bonusPoints);
function $function() {
  console.log(42);
}
$function();
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

// function increament() {
//   console.log("This button was clicked");
// }
let number = 42;
function call() {
  console.log(number);
}
call();
function totalTime() {
  console.log(lap1 + lap2 + lap3);
}
totalTime();
let lapsCompleted = 0;
function increase() {
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
}
increase();
// let text = "it is clicked";
// function increament() {
//   text = "The button was clicked";
// }
// increament();
// console.log(text);
// let countEl = document.getElementById("count-el");
// console.log(countEl);

// let count = 0;
// function increament() {
//   count = count + 1;
//   countEl.innerText = count;
// }
// increament();
// console.log(count);
// increament();
// console.log(count);
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;

function increasing() {
  count += 9;
  let entries = count + " - ";
  countEl.innerText = count;

  saveEl.innerText += entries;
}

// function save() {

// function save() {
//   console.log(count);
// }
// save();
// let string = "You have tree new notifications";
// let messagetoUser = string + ", " + "Albert";
// console.log(messagetoUser);
// let $name = "Albert";
// let greeting = "Hi my name is ";
// let myGreeting = greeting + $name;
// console.log(myGreeting);

//

// welcome();
