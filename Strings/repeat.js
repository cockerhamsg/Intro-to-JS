/* Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

repeat(3, 'ha'); // 'hahaha' */

repeat(3, 'ha');

function repeat(n, string) {
  let reps = '';

  while (n > 0) {
    reps += string;
    n -= 1;
  }

  return reps;
}