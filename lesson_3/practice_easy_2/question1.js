// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

function replaceString(str, wordToReplace, replacementWord) {
  return str.replace(wordToReplace, replacementWord);
}
console.log(replaceString(advice, "important", "urgent"));

// Note that if the string contains two or more occurrences of important, this code only replaces the first.
// Can you figure out how to replace all occurrences?

// Thinking this through: what does the replaceString return if there is nothing to replace?
// Well, it will return the same string. So we can have a while loop with a halting condition when
// the output of the replacement string is equal to the current string.

let advice2 = advice + " Well, other than other important things.";

function replaceAllStrings(str, wordToReplace, replacementWord) {
  let currentString;
  let newString = str;
  while (newString !== currentString) {
    currentString = newString;
    newString = currentString.replace(wordToReplace, replacementWord);
  }

  return newString;
}

console.log(replaceAllStrings(advice, "important", "urgent"));
console.log(replaceAllStrings(advice2, "important", "urgent"));

console.log(advice2.replaceAll("important", "urgent"));

// Ha! There was a replaceAll method. Maybe what this is trying to say, is that you should probably look for
// the answer on the internet before trying it yourself. Although, trying it yourself seems to be the
// best way to learn.
