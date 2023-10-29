// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciFunc" , () => {
  const fibonacciLength1 = 6
  // Expected output: [1, 1, 2, 3, 5, 8]

  const fibonacciLength2 = 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

  it("takes an integer and returns a fibonacci sequence as an array" , ()=>{
    expect(fibonacciFunc(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacciFunc(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})


// b) Create the function that makes the test pass.

// Pseudo code:
// input: integer
// output: an array as a Fibonacci sequence in which each number is the sum of the two preceding ones.
//create a functions that takes in an integer in the parameter
const fibonacciFunc = (num) => {
  //create an empty Array to store our elements
  var fibonacciArray = [] 
  //create an index variable to add the previous index with the current one
  var index = 0
  if ( num > 2 ) {
    //use a for loop to iterate 'num' times
    for (let i = 0; i<num+1; i ++){
      //create conditional statements to check for numbers already in the array
      if(fibonacciArray.includes(1)){
        sum = fibonacciArray[index] + fibonacciArray[i-1]
        //store the sum as a new element in the array.
        fibonacciArray.push(sum)
        //increase the index by 1
        index += 1
      //use this to store your first two integers in the array in order to add them later on once the if statement becomes true
      }else{
        fibonacciArray.push(i)
      }
    }
}
  else{
    return "please enter a number greater than 2"
  }
  //remove the first element
  fibonacciArray.shift()
  //return the array without '0'
  return fibonacciArray
}

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("leastGreatest", () =>{
  const studyMinutesWeek1 = {
    sunday: 90,
    monday: 30,
    tuesday: 20,
    wednesday: 15,
    thursday: 30,
    friday: 15,
    saturday: 60
  }
  // Expected output: [15, 15, 20, 30, 30, 60, 90]
  
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
  // Expected output: [10, 15, 20, 45, 60, 65, 100]

  it("takes in an object and returns an array of the object's values sorted from least to greatest.", ()=>{
    expect(leastGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })

})


// b) Create the function that makes the test pass.

// Pseudo code:
// input: object
// output: an array with the object's values sorted from least to greatest.
// create a functions that takes in a object in its parameter
const leastGreatest = (object) =>{
  //create a variable that will hold an array of the values from the object's keys
  //use Object.values to access the values of each key and return an array that will get stores in the variable times.
  let times = Object.values(object)
  //sort the array in times using .sort((a,b) => a-b) and return
  return times.sort((a,b) => a-b)
  
}
