/* Change your isBlank function from the previous exercise to return true if the string is empty or only contains whitespace. For example:

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

function isBlank(string) {
  return string.length === 0;
}

isBlank('mars'); // false */

function isBlank(string) {
  return string.trim().length === 0;
}

isBlank('mars'); // false

/* The String.prototype.trim() method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise. */