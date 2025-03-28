/*
    ? FUNCTIONS
    - block of code that performs a task and/or returns a value
    - runs when "invoked" or called

    Functions can be defined with:
        - Declaration
        - Expression
*/

/*
    ? Function declaration

    function functionName(optional, params) {
        ... code block
    }

    1. function keyword
    2. name of the function
    3. parens () which hold any parameters (or none)
    4. curly brackets to define the code block (as always!)

*/

function hello() {
  console.log("hello!!!")
}

// hello()
// console.log("in between")
// hello()
// hi()

function hi() {
  console.log("Hi :)")
}

// ! Parameters, params, arguments, args

function greeting(name) {
  console.log(`Hello`, name)
}

greeting("Danny", "Burrow", "the", "Great")
greeting("Steven")
greeting("Thomas the Tank Engine")
greeting(1234123)
greeting([0, 1, 1, 2, 3, 5])
greeting(0, 1, 1, 2, 3, 5, 8, 13, 21)

function subtract(num1, num2) {
  console.log(num1 - num2)
}

subtract(1, 2)
subtract(3245345, 123123)
subtract(1, 2, "a string")

/*
    ? Function Expression

    const functionName = function (optional, params) {
        ... code block
    }
*/

const add = function (x, y) {
  console.log(x + y)
}

add(1, 3)
add(1, "three")

/*
    ? Function Expression with ES6 syntax

    const functionName = (params) => {
        ... code block
    }

    1. variable declaration
    2. function name
    3. assignment operator
    4. params
    5. "fat arrow"
    6. code block with curly brackets

*/

const multiply = (x, y) => {
  //   console.log(x * y)
  return x * y
}
// multiply(10, 2)

/*
    ? Return values
    - every function has a return value
    - if you don't define one, it's undefined
    - the function call is a JS expression
        - the expression resolves to the return value
*/

let output2 = add(10, 2) // add() does not declare a return value
console.log(output2) // undefined

output2 = multiply(10, 2) // multiply() explicitly declares a return value
console.log(output2) // 20

// because the function call is an expression that resolves to a single value
// functions can be used as a part of a larger expression

console.log(multiply(5, 3) * 2)

let numbers = multiply(4, 3) + multiply(2, 5) / multiply(6, 3)
console.log(numbers)

numbers = multiply(2, multiply(2, multiply(2, 2)))
console.log(numbers)

const text = "this is a text string"

const introduction = (firstName, state, hobby) => {
  return `Hello, my name is ${firstName}, I live in ${state}, and I like to ${hobby}`
}

const danny = introduction("Danny", "Oregon", "dance")
console.log(danny)

const steven = introduction(
  "Steven",
  "Florida",
  "brag about the weather         "
)
  .toLowerCase()
  .trim()
console.log(steven)

const spongebobifier = (learner) => {
  let spongeBobName = ""
  for (letter of learner) {
    if (Math.random() > 0.5) {
      spongeBobName += letter.toUpperCase()
    } else {
      spongeBobName += letter.toLowerCase()
    }
  }
  return spongeBobName
}

const learners = ["Niki", "Rosie", "Nick", "Rob", "Kaleb", "Amos"]
const spongebobbedLearners = []

for (learner of learners) {
  spongebobbedLearners.push(spongebobifier(learner))
}

console.log(spongebobbedLearners)

// Follow-along activity
// ? Anagram checker
// write a function that takes two strings as params
// and returns a boolean
// that represents whether those two strings are anagrams
// extra challenge: make it case insensitive

const stringSorter = (s) => {
  // const stringArray = Array(...s)
  // const sortedArray = stringArray.toSorted()
  // return sortedArray.toString()
  return Array(...s.toLowerCase())
    .toSorted()
    .toString()
}

const anagramChecker = (wordOne, wordTwo) => {
  //   if (wordOne.length !== wordTwo.length) {
  //     return false
  //   }
  //   const one = stringSorter(wordOne)
  //   const two = stringSorter(wordTwo)
  //   return one == two
  return stringSorter(wordOne) === stringSorter(wordTwo)
}

console.log(anagramChecker("cat", "ACT"))
console.log(anagramChecker("cat", "actor"))
console.log(anagramChecker("study", "Dusty"))

console.log(anagramChecker("study", "pizza"))

const analyzeTemperature = (temp) => {
  if (temp > 80) {
    return "it's hot out"
  } else if (temp < 55) {
    return "it's cold out"
  }
  return "it's nice out!"
  console.log("this will never happen")
}

const output = analyzeTemperature(90)
// console.log(output)

// ? Concise syntax
// this is ONLY for arrow functions

// when a function's job is to return a single expression
// or, when a whole function body can fit on one line
//    * the curly brackets are optional
//    * when there's no curly brackets, the return is implicit
//    * if there's only param, the parens are optional

const double = (num) => {
  return num * 2
}

const doubleConcisely = (num) => num * 2

// ? Spread and rest

// spread unpacks an iterable into... something (here, it's params)
const sumThree = (x, y, z) => x + y + z
console.log(sumThree(1, 2, 3))

const numsToAdd = [1, 2, 3]
console.log(sumThree(...numsToAdd))

// rest bundles multipe things into a single Array
const countParams = (...args) => {
  console.log(args)
  return args.length
}

console.log(countParams(1, 2, 3, 1123, "wheee!", 234, ``, 123))

// Recursion

const countDown = (n) => {
  if (n === 0) {
    console.log("Done!")
    return
  }
  console.log(n)
  countDown(n - 1)
}

const countDownWithoutRecursion = (n) => {
  while (n != 0) {
    console.log(n)
    n--
  }
  console.log("Done!")
}

countDown(5)
countDownWithoutRecursion(5)
