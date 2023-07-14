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
