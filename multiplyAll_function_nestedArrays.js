// function multiplyAll(arr){
//     let product = 1; 
//     // Only change code below this line 
//         for(let i = 0; i < arr.length; i++){
//             // console.log(arr[i]); 
//             for(let j = 0; j < arr[i].length; j++){
//                 // console.log(arr[i][j]);
//                 product *= arr[i][j]; js
//             }
//         }

// const { countReset } = require("console");

// const { arrayBuffer } = require("stream/consumers");

        
//     //Only change code above this line 
//         return product; 
// }

// multiplyAll([[1,2], [3,4], [5,6,7]]); 

// function add(){
//     let sum = 0; 
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]; 
//     }
//     return sum; 
// }

// console.log(add(1,2)); 



// function orderMyLogic(val){
//     if(val < 5){
//         return "Less than five"; 
//     }else if (val < 10){
//         return "Less than ten";
//     }return "Greater than or equal to 10"; 
// }
// console.log(orderMyLogic(5)); 



// var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//   // Only change code below this line


//   return par / strokes;
//   // Only change code above this line
// }

// console.log(golfScore(5, 4));


// function switchOfStuff(val) {
//  let answer = ""; 
//   // Only change code below this line
// switch (val){
//   case "apple":
//       answer = "apple";  
//       break;
//   case "bird":
//       answer = "bird"; 
//         break;
//   case "cat":
//       answer = "cat"; 
//         break;
//   default: 
//       answer = "stuff"; 
//         break; 
// } 
//   // Only change code above this line
//   return answer;
// }

// console.log(switchOfStuff("duck"));

// function isLess(a, b) {
//   // Only change code below this line
//   return a < b; 
//   // Only change code above this line
// }

// isLess(10, 15);
let count = 0;
function cc(card) {
  // Only change code below this line
   
  if(card < 7){
    count += 1; 
  }else if (card == 10 || typeof(card) == typeof("string")){
    count -= 1; 
  }

  let msg = ""; 
  if (count <= 0){
    msg = " Hold"; 
  }else if (count > 0){
    msg = " Bet"; 
  }
  return count + msg;
  // Only change code above this line
}


console.log(cc(5)); 



