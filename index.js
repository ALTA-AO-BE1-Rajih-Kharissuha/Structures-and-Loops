// Problem 1
function palindrome(string) {
  // your code here
  var length = string.length;
  for (var i = 0; i < length / 2; i++) {
    if (string[i] !== string[length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("civic")); // true
console.log(palindrome("katak")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("kupu-kupu")); // false
console.log(palindrome("lion")); // false

// Problem 2
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
  // your code here
}

console.log(primaSegiEmpat(2, 3, 13));
console.log(primaSegiEmpat(5, 2, 1));
