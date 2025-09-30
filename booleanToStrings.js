//Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.

//My Solution
function boolToWord( bool ){
  //...
  if(bool === false){
    return "No"
  }else{
    return "Yes"
  }
}

//Other Solutions
//1. 
// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }

//2. 
// let boolToWord = bool => bool ? 'Yes' : 'No';