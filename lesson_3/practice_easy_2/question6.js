// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in JavaScript and programming in general.
// We'll explore this in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but in an un-nested format:

// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

flintstones = ["Fred", "Wilma"];
flintstones.push("Barney", "Betty");
flintstones.push("Bambam", "Pebbles");

console.log(flintstones);

// Alternatively,

flintstones = ["Fred", "Wilma"];
newNames = ["Barney", "Betty", "Bambam", "Pebbles"];
console.log(flintstones.concat(newNames));
console.log(flintstones);

// The above would actually be a new array. The other solution, using the .push method, would actually be mutating
// the existing array, which is not what the problem is asking.

function addNewNames(array, newNames) {
  let newArray = array.slice();
  for (i = 0; i < newNames.length; i++) {
    newArray[newArray.length] = newNames[i];
  }
  return newArray;
}

console.log(addNewNames(flintstones, newNames));

// This would also create a new array with all the new names. Overcomplicated, but just wanted
// to practice some for loops.

// Shit. Try again. Didn't realize it was asking me to transform the flintstones with nested items.

flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlintstones = [].concat(...flintstones);

console.log(newFlintstones);

// Here is the way I probably would have done it, seeing no other way:

function flattenArray(array) {
  let newArray = []
  for (ele of array) {
    if (Array.isArray(ele)) {
      for (subEle of ele) {
        newArray.push(subEle)
      } 
    } else {
      newArray.push(ele)
    }
  }
  return newArray
}

console.log(flattenArray(flintstones))

// However, the Spread syntax plus concat is pretty powerful. I think it enumerates over every
// element in the array, potentially even over multiple nested arrays, although I would have to confirm that.
// Just confirmed and, nope, this is not the case. It does the same thing as my function. There is no
// advantage, perhaps other than efficiency and brevity. 

[[['hello', 'yes'], ['hello','no']], [['so long', 'sherlock'], ['this','sucks']]]

// Ah, ok... Now I get what's going on in the concat solution. The spread syntax (...) is essentially using
// all of the individual elements of that array as arguments, and concatenating them. Concat does something weird
// with arrays though, and thats what I'll have to research.