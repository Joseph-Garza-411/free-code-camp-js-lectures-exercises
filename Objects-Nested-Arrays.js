// for(let i = 0; i < 5; i++){
//     console.log("First Level Loop"); 
// for(let j = 0; j <= 1; j++){
//     console.log("--Second Level Loop"); 
// }
// 



// let arr = [
//     [1,2], 
//     [3,4], 
//     [5,6],
//     ['loop4', 4], 
//     ['loop5', 5],  
// ]

// console.log(arr[0].length+ ` , `+ arr[1].length+ ` , ` + arr[2].length);  
// console.log(arr); 
// console.log(arr.length); 
// console.log[3]; 
// console.log(arr.length); 
// console.log(arr[3]); 
// console.log(arr[4]);
// console.log(arr[5]);  


// var myNoun = " dog";
// var myAdjective = " big";
// var myVerb = " ran";
// var myAdverb = " quickly";

// // Only change code below this line
//     myAdjective += myNoun;
//     myVerb +=  myAdverb; 
//     myAdjective += myVerb; 
//     var wordBlanks = "That" + myAdjective + "."; // Change this line
// // Only change code above this line

// // console.log(myAdjective); 
// // console.log(myVerb); 
// console.log(wordBlanks); 


// function nextInLine(arr, item) {
//     // Only change code below this line
//     let localM = arr.push(item); 
    
//     return arr.shift();
//     // Only change code above this line
    
  
//   }
  
//   // Setup
//   var testArr = [1,2,3,4,5];
  
//   // Display code
//   console.log("Before: " + JSON.stringify(testArr));
//   console.log(nextInLine(testArr, 6));
//   console.log("After: " + JSON.stringify(testArr));
// //   console.log(arr.length); 

// function trueOrFalse(wasThatTrue) {
//   // Only change code below this line
//   if(wasThatTrue){
//     return "Yes, that was true."; 
//   }
//     return "No, that was false."; 
//   // Only change code above this line
// }

// let answer = trueOrFalse(true); 
// console.log(answer); 
// trueOrFalse(false); 

function orderMyLogic(val) {
 
  if (val < 5) {
    return "Less than five";
    console.log("Less than five"); 
  } else if (val < 10) {
    return "Less than ten";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(4);







