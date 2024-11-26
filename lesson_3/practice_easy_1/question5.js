// What will the following code output? 

console.log(false == '0');
console.log(false === '0');

// The second line is for sure going to output false, but the first, will perhaps output
// true, if false is coerced to 0. I think that it is, actually. True is coerced to 1. 
// false is coerced to 0. And the string on the right hand side will be coerced to 
// 0. Unless, this is a string value, and the string value rules are different, in that
// it will follow string rules if there is at least 1 string, which will go char by char
// to see if one is equal to the other, until it gets to two chars that are different.

// However, I am pretty sure the rules are: If there is a number, then coerce to numbers.
// If there are strings, then coerce to strings. If there is a mix (bool, string, obj) 
// of values other than numbers, I believe JavaScript coerces them to a number. That is
// my guess, anyway. 