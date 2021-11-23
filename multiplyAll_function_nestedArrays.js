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


// const ourDog = { 
//   "name" :  "Camper" , 
//   "legs" :  4 , 
//   "tails" :  1 , 
//   "friends" : ["everything"]
// } 

// ourDog.bark = "bow-wow"; 



// console.log(ourDog); 
// // ourDog.name = "Happy Camper";
// // console.log("The new name of our doggo is: " + ourDog["name"]); 
// // ourDog["name"] = " Happy Happy Coder"; 
// // console.log("The latest name of our doggo is now: " + ourDog["name"]); 


/* The following snippet of code is an activity that is designed to teach the learner how to 
transform a switch statement into an object that called "lookup" which will assign the associated
string to the "result" variable. 

// Only change code below this line
 switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
*/ 

/*
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  let lookup = { // Transform the switch statement into an object called lookup. 
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie":"Chicago",
     "delta":"Denver",
     "echo": "Easy",
     "foxtrot": "Frank"
  }
  // assign the associated string to the "result" variable
  result = lookup[val]; 
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("alpha"));
  
*/ 


/* .hasOwnProperty(propname) -- 
We can use the .hasOwnPropertyName(propname) method of objects to determine if 
that object has the given property name. .hasOwnProperty() returns true if the property is found, 
false if otherwise. 

*/ 

//Example 

// const myObj = {
//   top: "hat", 
//   bottom: "pants", 

// }; 
// console.log(myObj.hasOwnProperty("top")); 
// console.log(myObj.hasOwnProperty("middle")); 

 /*
Instructions: Modify the function checkObj to test if an object passed to the function (obj) contains 
"checkProp". If it is found, return that value, otherwise return false. 
*/
// function checkObj(obj, checkProp) {
 
//   // test if an object passed contains "checkProp"
//   if (obj.hasOwnProperty(checkProp){
//     return obj[checkProp]; 
//   // If it is found, return that value, otherwise return false.
//     return answer;
//   } else { 
//     return " Not Found"; 
//   }
//  }

/* Post Challenge Observations: 
Just a few notes and observations concerning this exercise: 
I need to be careful when entering the code that targets the desired object, e.g. 
in the if statement = if(obj.hasOwnProperty(checkProp)) as we are looking up a 
value of the object named obj and we do not wrap  - checkProp in quotations 
as it is the actual value that we are looking for. 
*/ 


/* 
Add a new album to the myMusic array. Add artist and title strings, 
release_year number and a formats array of strings. 
*/ 

// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   }
// ];

// myMusic.push(
//   {
//     "artist": "Wildman",
//     "title" : "The Incredible Song", 
//     "release_year" : 1999, 
//     "formats" : [
//       "CD", 
//       "LP"
//     ], 
//     "gold": true
//   }
// ); 


 

//  console.log(myMusic); 
//  console.log(myMusic.length); 
// console.log(myMusic[1]);



// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };


// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       " fir",
//       " pine",
//       " birch"
//     ]
//   }
// ];

// // const secondTree = "";
// let element0 = myPlants[1].list[0];
// let element1 = myPlants[1].list[1];
// let element2 = myPlants[1].list[2];  
// console.log(element0 + ',' + element1 + ',' + element2); 

// const gloveBoxContents = myStorage.car.inside["glove box"];  
// console.log(myStorage.car); 

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line

// // console.log(recordCollection); 
// function updateRecords(records, id, prop, value) {
// if (prop !== 'tracks' && value !== ""){
//   records[id][prop]= value; 
// } else if (prop == 'tracks' && records[id].hasOwnProperty('tracks') === false){
//   records[id][prop] = [value]; 
// } else if (prop == 'tracks' && value !== ""){
//   records[id][prop].push(value); 
// } else if (value == ""){
//   delete records[id][prop]; 
// }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// console.log(recordCollection); 


// Setup
// const myArray = [];

// Only change code below this line

// let i = 5; 
// while (i >= 0){
//   myArray.push(i);
//   i--; 
//   }

// console.log(myArray);

// Setup
// const myArray = [];

// Only change code below this line
// for (let i = 0; i <= 5; i++){
//   myArray.push(i); 
// }
// console.log(myArray); 
// const myArr = [2, 3, 4, 5, 6];
//   let total = 0; 
//   for (let i = 0; i < myArr.length; i++){
//     total += myArr[i]; 
    
//     console.log(total); 
    
// }

// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// console.log(arr.length);

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++){
//       for (let j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]); 
//       }
//   }

//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// function multiply(arr, n) {
//   let product = 1;
//   for (let i = 0; i < n; i++) {
//     product *= arr[i];
//   }
//   return product;
// }


// function countDown(n){
//   for (let i = n; i > 0; i--){
//   console.log(i) 
//   }
//   console.log('Hooray'); 
//   }
//  countDown(10);


// function countDownRecursive (n){
//   if( n <= 0){
//     console.log('Hooray'); 
//     return 
//   }
//   console.log(n); 
//   countDownRecursive(n -1); 
// }

// countDownRecursive(4)





// function sumRange(n){
//   let total = 0; 
//   for (let i = n; i > 0; i--){
//     total += i; 
//   }
//   return total; 
// }
// console.log(sumRange(6)); 
// console.log(sumRange(3)); 

// function sumRangeRecursive (n, total = 0) {
//   if (n <= 0){
//     return total 
//   }
//     return sumRangeRecursive(n - 1, total + n)
// }


// console.log(sumRangeRecursive(3)); 

// printChildrenRecursive(tree)

// function printChildrenRecursive(t){
//   if (t.children === 0){
//    return; 
//   } 
//   t.children.forEach(child =>{
//     console.log(child.name); 
//   })  

// }


// const tree = { 
//   name: 'John', 
//   children: [
//     {
//       name: 'Jim', 
//       children:[]
//     }, 
//     {
//       name: 'Zoe', 
//       children: [
//         {name: 'Kyle', children: []},
//         {name: 'Sophia', children: []}
//       ]
//     }
//   ]
// }


// // function printChildrenRecursive(t){
// //   if (t.children === 0){
// //    return; 
// //   } 
// //   t.children.forEach(child =>{
// //     console.log(child.name); 
// //     printChildrenRecursive(child); 
// //   })  

// // }

// // printChildrenRecursive(tree); 

// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   if ( lookUpProfile[name] == contacts['firstname'] && lookUpProfile[name]["prop"] == contacts){
//     return
//   }
//   else if ( lookUpProfile[name] !== contacts.firstName){
//     return "No such contact"; 
//   }
//   else if ( prop = contacts[prop]){
//     return "No such property"; 
//   }

//   // Only change code above this line
// }

// console.log(lookUpProfile("Akira", "likes"));

// console.log(Math.random());
// console.log(Math.random(3)); 


// let random_Number1 = Math.floor(Math.random() * 5); 
// console.log(random_Number1); 
// let random_Number2 = Math.floor(Math.random() * 10); 
// let random_Number3 = Math.floor(Math.random() * 15); 
// console.log(random_Number1, random_Number2, random_Number3); 


// Only change code below this line
// function countdownRecursive(n){
//   if (n <= 0){
//        return [];
//   } else {
//     let arr = countdownRecursive(n - 1);
//     arr.unshift(n); 
//     return arr; 
//   }
// }
// // Only change code above this line

// console.log(countdownRecursive(10)); 


// let twentyThree = 'XXIII';
// let romanNumerals = ['XXI', 'XXII'];

// romanNumerals.unshift('XX');
// console.log(romanNumerals);
// console.log(romanNumerals.shift());
// console.log(romanNumerals);
// romanNumerals.unshift('XX');
// console.log(romanNumerals); 
// romanNumerals.push(twentyThree); 
// console.log(romanNumerals); 







// let arr = []; 
// for(let i = 10; i > 0; i--){
//   arr.unshift(i);
  // console.log(i);   
  // console.log(arr);
// }
// console.log(arr); 






// let arr1 = []; 
// for(let i = 10; i > 0; i--){
//   arr1.push(i);
  // console.log(arr1);   
  // console.log(arr);
// }
// console.log(arr1); 



// let arrayOne = ["Peanut Butter", "Strawbwerry Jelly", "Grape Jelly"];
// let arrayTwo = []; 

// function transfersElements (arr) {
//   for(let i = 0; i < transfersElements.length; i++){
//     arrayTwo.push(arr);
//     console.log(arrayTwo);   
//     // console.log(arr);
//   }
// }

// (transfersElements(["Peanut Butter", "Strawbwerry Jelly", "Grape Jelly"])); 
// console.log(arrayTwo); 


// let arr = []; 

// function transfersElements (arr) {
//   for(let i = 0; i < transfersElements.length; i++){
//     arr.unshift(arr);
//     console.log(arr);  
//     // console.log(arr);
//   }
// }

// (transfersElements(["Peanut Butter", "Strawbwerry Jelly", "Grape Jelly"])); 
// console.log(arr); 




// function mixedNumbers(arr){
//   // change code below this line 
//   arr.push(7, 'VIII', 9); 
//   arr.unshift("I", 2, "three");
//   // change code above this line 
//   return arr; 
// }
// console.log(mixedNumbers(['IV', 5, 'six']))


// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(2, 1);
// arr.splice(3, 2);
// // Only change code above this line
// console.log(arr);

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3);
// console.log(todaysWeather); 


// function quickCheck(arr, elem) {
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++){
//     if (arr[elem] == indexOf[arr]){
//       return true; 
//     } else {
//       return false; 
//     }

//   }

// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// function quickCheck(arr, elem) {
//   if (arr.indexOf(elem) >= 0) {
//     return true;
//   }
//   return false;
// }
// console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));


// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for ( let i = 0; i < arr.length; i++){
//     if (arr[i].indexOf(elem) == -1){
//         newArr.push(arr[i]); 
//      }
    
//    }
//   // Only change code above this line
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// let nestedArray = [
//   ['deep'],
//   [
//     ['deeper'], ['deeper'] 
//   ],
//   [
//     [
//       ['deepest'], ['deepest'],  ['Hey'] 
//     ],
//     [
//       [
//         ['deepest-est?']
//       ]
//     ]
//   ]
// ];


// console.log(nestedArray[0]);
// console.log(nestedArray[1]);
// console.log(nestedArray[2]);
// console.log(nestedArray[3]);



// let myNestedArray = [
//   // Only change code below this line
//   ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//   ['loop', 'shift', 6, 7, 1000, 'method'],
//   ['concat', false, true, 'spread', 'array', ["deep"]],
//   ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
//   ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]]]
//   // Only change code above this line
// ];


// console.log(myNestedArray.length)


// function reverseString (str) {
// let arr = []; 
// let arr1 = []; 
// for (let i = str.length - 1; i >= 0; i --){
//   arr.push(str[i]); 
//   arr1 += str[i]; 

// }
//  return arr1; 
// }

// console.log(reverseString("hello")); 

// define a global variable which will hold the word with the greatest number of elements thus far 
let longestWordThusFar; 

function findLongestWordLength(str) {

  // iterate through the entire string in order to access the length of each word passed in 
  for ( let i = 0; i < str.length; i++){
     longestWordThusFar.push(str.length); 
       
  } 

  //return the length of the longest word of the string passed in. 
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(longestWordThusFar); 