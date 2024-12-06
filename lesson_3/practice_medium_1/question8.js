// One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with 
// their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

console.log(munsters)

// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? 
// Why or why not?

/* 
Yes, well partially. The sub-objects that contain age and gender did in fact get ransacked. 

Lets step through what's going on:

The musters object is getting passed into the messWithDemographics function. It is then passed into Object.values,
which creates an array with the values of the object, which are the nested objects that contain the age and 
gender information. Its important to note that the array contains references to these objects - the same references
that are in the original object - and not the objects themselves. 

The forEach method is then called on the array of object values, and in each array object at the specified 
reference, the age and gender properties are reassigned and thus mutated. Therefore, the objects on the original
array are also mutated, since the objects in the values array and the original array have the same reference.

The original array will have all the age values incremented by 42 and all gender values assigned to other. 

Forgot to point out that the munsters object is passed by reference, and thus the demoObject parameter will 
contain the same object reference as munsters. This was kind of implied, but its worth stating explicitly.  
*/

