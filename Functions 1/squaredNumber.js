/* Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).

squaredNumber(3); // 9 */

squaredNumber(3); // 9

function squaredNumber(num) {
  return num ** 2;
}

/* Our solution uses the exponentiation operator (**) to multiply our parameter num by the power of 2. Because squaring a number is the equivalent of multiplying the number by itself, the below solution would also be valid:

function squaredNumber(num) {
  return num * num;
} */