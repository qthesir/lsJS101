// Consider the following object:

let flintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

["Barney", 2];

let newArr = [];

newArr.push(Object.keys(flintstones)[2]);

newArr.push(flintstones.Barney);

console.log(newArr.push[flintstones.Barney]);
console.log(Object.keys(flintstones)[2]);
console.log(flintstones.Barney);
console.log(newArr);
console.log(Object.entries(flintstones))
console.log(Object.entries(flintstones)[2])
console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift()) 
// Shift is necessary in the above because the pair returned in the filter is nested in another array, so the
// Barney array needs to be taken out of it. 
flintstones.to


// Spread syntax ONLY works on iterable objects. But I'm trying to remember... how did the book turn the object
// into an array last time? There's gotta be a few different ways to do this. 

// Object.keys() is for object keys, Object.values() for object values, and Object.entries() for nested arrays
// of key, value pairs in an object. 
