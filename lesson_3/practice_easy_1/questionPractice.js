// Question 1

// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

/* 
No, it will not. It will create a slot at array index 6, set it equal to 5, and will set the array slots 3, 4, 5
to 'undefined'. Well, maybe that's not exactly whats happening... Its creating 3 empty spaces. But these may not 
be slots in the traditional sense.
*/

numbers[4];

// What will the above return?

// Per my answer to the previous question, it will return undefined.

// Reflection: I, again, answered this question incorrectly. The array values will actually not be initialized at all,
// they return undefined but they have no value. this is important because if you use an array method like map()
// the function will skip over the non-values.

// Question 2

// How can you determine whether a given string ends with an exclamation mark?

// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

function hasExclaimation(str) {
  return str[str.length - 1] === "!";
}

// console.log(hasExclaimation(str1))
// console.log(hasExclaimation(str2))

// Could also use the following method:

// console.log(str1.endsWith('!'))

// Question 3

// Determine whether the following object of people and their age contains an entry for 'Spot'

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(Object.keys(ages).includes("Spot"));
// console.log(ages.hasOwnProperty('Spot')) // interesting. Seems like a lot of these have their own object method

// Question 4

// Using the following string, create a new string that contains all lowercase letters
// except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

function properCapitalization(str) {
  let output = str.toLowerCase();
  return output[0].toUpperCase() + output.slice(1, output.length);
}

console.log(properCapitalization(munstersDescription));

// Solution used .charAt(). Why would you use .charAt? What is the advantage to doing it that way?

// Question 5

// What will the following code output?

console.log(false == "0");
console.log(false === "0");

// The first will output true. First, false will get coherced to a number, which will then compared 0 to '0'.
// Then, the string '0' will get coherced to a number, since a string is getting compared with a number.
// In the second, there is no cohercion taking place, and the values, not being equal, will return false.

// Question 6

// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

// Ok so, here, I have  the ages object. The question is asking me to add the entries Marylyn and
// Spot to the object. Not sure if its the first or second object, but ok...
// I don't really need to iterate through the additional ages... I can probably just add them.

// Simple solution
// ages.Marilyn = 22
// ages.Spot = 237
// console.log(ages)

// other solution using object.assign method:
Object.assign(ages, additionalAges);
console.log(ages);

// Question 7

// Determine whether dinosaur is in each string. It seems to be referring to the specific name "Dino".
// That is, str1 should return false. The .includes should be case sensitive, since d and D have different
// unicode values.

let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));
// could also do:

str1.match("Dino") !== null;

// or

str2.indexOf("Dino") > -1; // this will return -1 if the index does not exist.

console.log(str1.indexOf("Dino"));

// Question 8

// How can we add the family pet "Dino" to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
// or
flintstones.unshift("Dino");

// or

flintstones = flintstones.concat("Dino");

// or

flintstones[flintstones.length] = "Dino";

console.log(flintstones);

// Question 9

// How can we add multiple items to our array? ("Dino" and "Hoppy")

let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones2.push("Dino", "Hoppy");
flintstones2 = flintstones2.concat("Dino", "Hoppy");
console.log(flintstones2);

// Question 10
// Return a new version of this sentence that ends just before the word house. Don't worry about
// spaces or punctuation: remove everything starting from the beginning of house to the end of the
// sentence.

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

console.log(advice.slice(0, advice.indexOf("house")));
