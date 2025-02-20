// Write a function that will take a short line of text, and write it to
// the console log within a box.

/* 
PEDAC

Problem

Input:
  String value
Output:
   String value inside of a box in the console, for ex:

+-------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

Assumptions
1. The box will look like this: 
+--+
|  |
|  |
|  |
+--+
2. The output will always fit in the browser window
3. The box will expand to the size of the text.
4. What happens when the text exceeds a certain size? Will it wrap, or overflow?

Mental Model
The program will take a string as an input. It will create 2 pieces: The border and the top and bottom 
padding, which will equal the length of the string plus two for padding. For the middle value with the 
sentence, it will add the "|" value on each side with one space on each side for padding. Then, 
the box will be constructed and returned to the user.

Examples

Input:
  "Spaceship"
Output:
+-----------+
|           |
| Spaceship |
|           |
+-----------+

Input:
  ""
Output:
  +--+
  |  |
  |  |
  |  |
  +--+

Data Structure
The function will take in a string value and log a string value to the console.

Algorithm
1. Declare a function that takes the parameter "str"
2. Set outerBorder equal to "+" + "-".repeat(str.length + 2) + "+"
3. Set innerBorder equal to "|" + " ".repeat(str.length + 2) + " "
4. Set middleSentance equal to "|" + " " + str + " " + "|"
5. Log the following, each with one line:
  1. outerBorder
  2. innerBorder
  3. middleSentence
  4. innerBorder
  5. outerBorder

*/

// Code with Intent

function makeBanner(sentence) {
  let outerBorder = "+" + "-".repeat(sentence.length + 2) + "+";
  let innerBorder = "|" + " ".repeat(sentence.length + 2) + "|";
  let middleSentence = "|" + " " + sentence + " " + "|";

  console.log(outerBorder);
  console.log(innerBorder);
  console.log(middleSentence);
  console.log(innerBorder);
  console.log(outerBorder);
}

makeBanner("To boldly go where no one has gone before.");

// Hard mode of this is to get the thing to wrap.
// Create a function that wraps messages that are too long to fit on the screen:

// Ok, so what you'd need to do first, is set a limit for when the banner is supposed to wrap. Then,
// you need to break up the prompt into strings the size of the wrap limit. You could say that every
// time the string is equal to a multiple of that value (i.e. no remainder with modulo), or it equals
// the length of the string, you return a string segment. It could simply take a helper function "generate
// middle sentences"

function makeBannerWrap(sentence, wrapLength) {
  let outerBorder = "+" + "-".repeat(wrapLength + 2) + "+";
  let innerBorder = "|" + " ".repeat(wrapLength + 2) + "|";

  console.log(outerBorder);
  console.log(innerBorder);
  generateMiddleSentences(sentence, wrapLength);
  console.log(innerBorder);
  console.log(outerBorder);
}

function generateMiddleSentences(sentence, wrapLength) {
  let sentenceArr = sentence.split("");
  let sentenceSegment = "";
  for (i = 0; i < sentenceArr.length; i++) {
    sentenceSegment = sentenceSegment + sentenceArr[i];
    if ((i + 1) % wrapLength === 0) {
      console.log("|" + " " + sentenceSegment + " " + "|");
      sentenceSegment = "";
    } else if (i === sentence.length - 1) {
      console.log(
        "|" +
          " " +
          sentenceSegment +
          " ".repeat(wrapLength - sentenceSegment.length + 1) +
          "|"
      );
    }
  }
}

makeBannerWrap("To boldly go where no one has gone before 42.", 30);
