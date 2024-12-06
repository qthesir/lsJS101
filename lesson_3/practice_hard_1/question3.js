// Given the following similar sets of code, what will each code snippet print?

// A
{
  function messWithVars(one, two, three) {
    one = two;
    two = three;
    three = one;
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);
}

/* 
One is: two
Two is: three
Three is: two

Hmmm... Need to revisit this one. Is it even going to change it? Like, this is a reassignment. There's no mutation
happening. 

The above is wrong. 

The answer is actually: 
One is: one
Two is: two
Three is: three

Nailed it! 
*/

// B

{
  function messWithVars(one, two, three) {
    one = ["two"];
    two = ["three"];
    three = ["one"];
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);
}

/* 
One is: one
Two is: two
Three is: three

Reason these stay the same is because, while the function is passing by reference, the parameters, which are 
shadowing the original one, two, three, are being reassigned, and now reference different arrays. 
*/

// C

{
  function messWithVars(one, two, three) {
    one.splice(0, 1, "two");
    two.splice(0, 1, "three");
    three.splice(0, 1, "one");
  }

  let one = ["one"];
  let two = ["two"];
  let three = ["three"];

  messWithVars(one, two, three);

  console.log(`one is: ${one}`);
  console.log(`two is: ${two}`);
  console.log(`three is: ${three}`);
}
/*
In this case, the values are going to change. 

One is: "two"
Two is: "three"
Three is: "one"

Splice is mutating the array within the function at the same reference as the variables outside the function,
so the global variables will be modified. 

Just to be clear: The first parameter in splice is the starting index, the second the number of deletions,
and the third is the replacement values. So the vlaue at the 0th index is being deleted and replaced with the
respective value. 
*/
