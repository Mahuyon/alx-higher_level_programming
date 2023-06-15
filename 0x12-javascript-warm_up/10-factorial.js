#!/usr/bin/node
function factorial (x) {
  if ((Number.isNaN(x)) || (x === 1)) {
    return 1;
  }
  return factorial(x - 1) * x;
}

console.log(factorial(parseInt(process.argv[2])));
