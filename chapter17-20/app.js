// // //question no 1
// var myArray = [[]]

// // //question no 2
// var matrix =[
//     [0, 1, 2 ,3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1],
// ];

// //question no 3
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }

  //question no 4

//   Get the number and length from the user
// const num = prompt("Enter a number: ");
// const length = prompt("Enter the length of the table: ");


// // Print the multiplication table
// for (let i = 1; i <= length; i++) {
//   console.log(`${num} x ${i} = ${num * i}`)
// };

//question no 5
 
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// question no 6

//    //Counting
// for (let i = 1; i <= 15; i++) {
//     console.log(i);
//   }
  
//    //Reverse counting
//   for (let i = 10; i >= 1; i--) {
//     console.log(i);
//   }
  
//   // Even numbers
//   for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
//   }
  
//    //Odd numbers
//   for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
//   }
  
//   // Series (2k)
//   for (let i = 1; i <= 10; i++) {
//     console.log(2 * i * 1000); // 2k
//   }

// question no 7

// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// const userInput = prompt("Enter a search term: ");
// const index = A.indexOf(userInput.toLowerCase());

// if (index !== -1) {
//   alert(`Found "${userInput}" at index ${index} in the list!`);
// } else {
//   alert(`Sorry, "${userInput}" not found in the list.`);
// }


// question no 8


// const A = [24, 53, 78, 91, 12];

// let max = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] > max) {
//     max = A[i];
//   }
// }

// console.log(`The largest number is: ${max}`);


// question no 9


// const A = [24, 53, 78, 91, 12];

// let max = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < max) {
//     max = A[i];
//   }
// }

// console.log(`The smallest number is: ${max}`);


//question no 10


for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }