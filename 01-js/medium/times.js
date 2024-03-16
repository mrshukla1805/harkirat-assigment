/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateSum(x) {
  let total = 0;
  for (let i = 1; i <= x; i++) {
    total += i;
  }
  return total;
}

function calculateExecutionTime(n) {
  const startTime = new Date();
  calculateSum(n);
  const endTime = new Date();

  // calculate the difference...
  const elapsedTimeInSeconds = (endTime - startTime) / 1000;

  console.log(`Sum from 1 to ${n}: ${elapsedTimeInSeconds.toFixed(6)} seconds`);
}


// Test with different values of n
calculateExecutionTime(100);
calculateExecutionTime(100000);
calculateExecutionTime(1000000000);
