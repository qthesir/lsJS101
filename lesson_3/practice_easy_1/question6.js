// We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

// Hmmm. Can you just add them? Can you just add two arrays? I want to check in node.
// Nope. It adds them like strings. + operator wont do.


for (person in additionalAges) {
  ages[person] = additionalAges[person];
}

console.log(ages);

// Could also do, per the hint:

let newObj = Object.assign(ages, additionalAges)

console.log(newObj);

// If you want to create a brand new object, you can do the following (the above copies
// the object reference): 

Object.assign({}, age, additionalAges); 