//1
let n = 6;
/*for (var i = 1; i <= n; i++) {
  console.log("*".repeat(n));
}*/

//2
/*for (var i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}*/

//3
/*for (var i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}*/

//4
let space = Math.floor((n / 2));
let spaceOdd = Math.floor((n / 2) - 1);
for (var i = 1; i <= n; i++) {
  if (n % 2 != 0 && i % 2 != 0) {
    spaceOdd = space - 1 
    console.log(" ".repeat(space) + "*".repeat(i));
  } else if (i % 2 === 0) {
    space = space - 1 
    console.log(" ".repeat(space) + "*".repeat(i));
  }
}