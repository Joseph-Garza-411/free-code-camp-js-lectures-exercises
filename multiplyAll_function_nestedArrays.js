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
// let count = 0;
// function cc(card) {
//   // Only change code below this line
//    switch (card){
//       case 2:
//       case 3: 
//       case 4:
//       case 5:
//       case 6:
//         count++; 
//         break; 
//       case 10:
//       case "J":
//       case "Q":
//       case "K":
//       case "A":
//         count --; 
//         break; 
//    }

//   let holdbet = ' Hold'; 
//   if (count > 0){
//     holdbet = ' Bet'; 
//   }

//    return count + holdbet;
  // Only change code above this line
// }


// console.log(cc("K")); 
// console.log(cc("Q")); 
// console.log(cc("j")); 
// console.log(cc(10)); 
// console.log(cc(5)); 
// console.log(cc(5));
// console.log(cc(2)); 
// console.log(cc(1)); 
// console.log(cc("A"));
// console.log(cc("K")); 

// const cat = {
//   "name" : "Whiskers", 
//   "legs" : 4, 
//   "tails": 1, 
//   "enemies": ["Water" , " and Dogs"]
// }; 

// console.log(cat.name); 
// console.log("Latest known alias: " + cat.name +  `\n`  + "Latest known enemies: " + cat.enemies+ '\n' +  "Number of limbs:" +  ` ` + cat.legs); 


// const myDog = {
//   "Name One" : "Schoop Schoop", 
//   "legs" : 4, 
//   "tails" : 1, 
//   "friends" : ["Joseph", " and Pat"]
// }

// console.log("Latest known alias: " + myDog["Name One"] +  `\n`  + "Greatest friends: " + myDog.friends+ '\n' +  "Number of limbs:" +  ` ` + myDog.legs); 


// const dogs = {
//   Fido: "Mutt" , 
//   Hunter: "Doberman" , 
//   Snoopie: "Beagle"  
// }

// const myDog = "Hunter"; 
// const myBreed = dogs[myDog]; 
// console.log(myBreed); 
// console.log(dogs["Fido"]); 

// Setup
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 16;       // Change this line
// console.log(playerNumber); 
// const player = testObj[playerNumber];   // Change this line
// console.log(player); 


const ourDog = { 
  "name" :  "Camper" , 
  "legs" :  4 , 
  "tails" :  1 , 
  "friends" : ["everything"]
} 
console.log(ourDog); 
ourDog.name = "Happy Camper";
console.log("The new name of our doggo is: " + ourDog["name"]); 
