function zeroFifty(numberRange) {
  if (numberRange >= 0 && numberRange <= 50) {
    console.log('Your number is between 0 and 50, or equal to 0 or 50');
  } else if (numberRange >= 51 && numberRange <= 100) {
    console.log('Your number is between 51 and 100, or equal to 51 or 100');
  } else if (numberRange > 100) {
    console.log('Your number is greater than 100');
  } else {
    console.log('Your number is less than 0');
  }
}

zeroFifty(25);
zeroFifty(75);
zeroFifty(125);
zeroFifty(-25);

/*
OR
function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}
*/