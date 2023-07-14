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
