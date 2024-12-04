// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// The above code will return the first array value [{ first: "value1" }, { second: "value2" }, 3, 4, 5]. 
// This is because when arr2 is assigned to the value of arr1, the slice method is applied to arr1, which
// returns a copy of arr1 at a new reference. Thus, arr2 and arr1 reference different arrays in the heap,
// and the reassignment of the 'first' property in arr2 does not affect the value of the 'first' property in arr1.

// The output was, actually, [{ first: 42 }, { second: "value2" }, 3, 4, 5], which reflects the property change
// applied to arr2. Why is this? This is because the .slice() method is creating a shallow copy, not a deep copy. 
// The array element 0 in arr2 contains the same object reference as the one in arr1. So, when that property
// was modified, it was modified at the same reference in memory as arr1. 