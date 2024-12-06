// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// This is going to output false, because NaN compared with anything is going to return false. Doesn't matter
// if both sides of the comparison operator are NaN. To make this return true, you can coherce both NaN's to a
// string value, or use the number method Number.isNaN().
