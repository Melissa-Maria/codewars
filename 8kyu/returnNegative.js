//In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?

//My Solution
function makeNegative(num) {
  // Code?
  //use Math.abs as it returns the absolute value of a number
  return -Math.abs(num);
}

//Other Solutions
//1. 
// function makeNegative(num) {
//   if ( num > 0 ) {
//         return -num;
//     }
//     else {
//         return num;
//     }
// }

//2.
// function makeNegative(num) {
//   return num > 0 ? -num : num;
// }