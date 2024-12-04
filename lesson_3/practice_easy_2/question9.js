// Back in the stone age (before CSS), we used spaces to align things on the screen. If we have a 
// 40-character wide table of Flintstone family members, how can we center the following title above the table 
// with spaces?

let title = "Flintstone Family Members";

function centerTitleAboveTable(title, tableSize) {
  let paddingSize = Math.floor(((tableSize - title.length) / 2))
  // Now, how to make a 8 whitespace long string?
  let leftPadding = ''
  let rightPadding = ''
  for (i = 0; i < paddingSize; i++) {
    leftPadding += ' '
    rightPadding += ' '
  }

  return leftPadding + title + rightPadding
}

console.log(centerTitleAboveTable(title, 40))

// Using String.prototype.padStart()

function centerTitleAboveTable2(title, tableSize) {
  let paddingSize = Math.floor(((tableSize - title.length) / 2))
  // Now, how to make a 8 whitespace long string?
  return title.padStart(title.length + paddingSize)
}

console.log(centerTitleAboveTable2(title, 40))


/* Thinking through this: The above title has 25 total characters, which will mean it will have to be padded on
either side by 40 - 25 = 15 / 2 = 7.5 characters on each side. 

Actually, don't think you really need the other side of the padding. Just the left-hand padding to separate it from
the console. Although it helps conceptually to have the right hand padding. 
*/
