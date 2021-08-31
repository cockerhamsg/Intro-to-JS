/* Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'. 

let weather = 'rainy'; // 'sunny', 'rainy', ...

if (weather === 'sunny') {
  console.log('It\'s a beautiful day!');
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log('Let\'s stay inside.');
}
*/

let weather = 'snow'; // 'sunny', 'rainy', ...

switch (weather) {
  case 'sunny':
    console.log('It\'s a beautiful day!');
    break;
  case 'rainy':
    console.log('Grab your umbrella.');
    break;
  default:
    console.log('Let\'s stay inside.');
    break;
}