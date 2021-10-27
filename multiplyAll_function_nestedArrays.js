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

const { arrayBuffer } = require("stream/consumers");

        
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



var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return par / strokes;
  // Only change code above this line
}

console.log(golfScore(5, 4));






