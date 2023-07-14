// Problem 1
// function palindrome(string) {
//   // your code here
//   var length = string.length;
//   for (var i = 0; i < length / 2; i++) {
//     if (string[i] !== string[length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(palindrome("civic")); // true
// console.log(palindrome("katak")); // true
// console.log(palindrome("kasur rusak")); // true
// console.log(palindrome("kupu-kupu")); // false
// console.log(palindrome("lion")); // false

// Problem 1
let nilai = 100;

nilai >= 80 && nilai <= 100
  ? console.log("A")
  : nilai >= 65 && nilai <= 79
  ? console.log("B+")
  : nilai >= 50 && nilai <= 64
  ? console.log("B")
  : nilai >= 35 && nilai <= 49
  ? console.log("C")
  : nilai >= 0 && nilai <= 34
  ? console.log("D")
  : console.log("invalid");

// // Problem 2
function primeX(number) {
  // your code here
  const array = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73,
  ];

  return array[number - 1];
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71

// Problem 3
function primaSegiEmpat(wide, high, start) {
  let count = 0;
  let hasil = "";
  let num = start;
  let total = 0;

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i < high; i++) {
    for (let j = 0; j < wide; j++) {
      while (!isPrime(num)) {
        num++;
      }
      total = total + num;
      hasil += num + " ";
      num++;
      count++;

      if (count === wide) {
        hasil += "\n";
        count = 0;
      }
    }
  }
  hasil += total;
  return hasil;
}
console.log(primaSegiEmpat(2, 3, 13));
console.log(primaSegiEmpat(5, 2, 1));

// Problem 4
function primeNumber(number) {
  // your code here
  let pembagi = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
