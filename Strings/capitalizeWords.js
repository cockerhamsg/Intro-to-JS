/* Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'. */

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizeWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizeWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizeWords.join(' '); // 'Launch School Tech & Talk'

/* In our solution, we capitalize one word after the other. We use string.split(' ') to split the input string into words, then iterate over these words, collecting their capitalized version in the array capitalizedWords, and finally join the capitalized words into the final string.

Capitalization of a word can be achieved by taking the first character (word[0]), transform it to upper case, and then concatenate it with the rest of the word (word.slice(1)). If we come across a word that is only one character long, word.slice(1) is the empty string. This is case for &. Note that '&'.toUpperCase() returns '&' (as would '&'.toLowerCase()), because '&' does not distinguish upper and lower case. */