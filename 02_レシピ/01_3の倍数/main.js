const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (number % 3 === 0) {
      console.log("Fizz")
    } else if (number % 5 === 0) {
      console.log("Buzz")
    } else if (number % 15 === 0) {
      console.log("FizzBuzz")
    } else {
      console.log(number)
    }
  }
}

// const genkiFunction = function (number) {
//   // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 === 0) {
//       console.log(`${n}!!!!!!!`)
//     } else {
//       console.log(n)
//     }
//   }
// }
