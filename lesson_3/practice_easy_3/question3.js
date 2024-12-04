// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// This is going to log "hello there". Strings are primitives, not objects, and thus str1 is left unaffected when
// str2 gets modified because the value assigned to str2 is not a reference but the actual value of str1. 