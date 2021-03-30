// PRE-FIZZBUZZ WORKOUT*


// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.


//  Parameters- a positive integer
// Return- An array of numbers 1-n
// Example:
// (n) - (5)-  [1, 2, 3, 4, 5]

// Psuedo Code
// -writing an algorithm
// -making an empty array
// -put numbers 1-n in it
// return an array of number 1-n



// function preFizz(n) {
//     const arr = []
//     for(let i = 1; i <= n; i++){
//       arr.push(i)
//     }
//     return arr









// write a fucntion that returns a string with the first letter of every word cap.


//parameters -  a string

//write a function call capFirstLetter as a string
// make a variable for an array
//turn string into an array, lowercase it and split it into spaces.
// create a for loop use .length.
// inside for loop use strArr index and a method to target first letter.
// pluck first letter and cap it
//pluck 2 letter on and lowercase it
//


const capFirstLetter = (str) =>{
  const strArr = str.toLowerCase().split(' ')

  for(let i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + 
    strArr[i].substring(1)
  }
  return strArr.join(' ')
}


// Test cases
console.log(capFirstLetter('i lOvE yoO')) // I Love You
console.log(capFirstLetter('i like to sinG')) //I Like To Sing
console.log(capFirstLetter('i  drink wAter')) //I Drink Water

//Watch the video
//try coding out yourself without looking at the answer
//look at the answer correct you have and write it 10x LINE BY LINE.
//REPEAT!


// Reverse set integer.