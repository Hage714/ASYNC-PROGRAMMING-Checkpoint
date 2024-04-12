// Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    console.log(value);
    await new Promise(resolve => setTimeout(resolve, 1000)); //wait for 1 second before proceeding to next iteration
  }
}
const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values); //calling the async function





