//Complete the solution so that it reverses the string passed into it. 

//My Solution
function solution(str) {
  let splitString = str.split(''); 
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join('');
  
  return joinArray;
  
}

//Other Solutions
//1.
// function solution(str){
//   return str.split('').reverse().join('');  
// }

//2.
// const solution = str => str.split('').reverse().join('');