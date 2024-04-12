// Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

async function function1() {
    console.log("Function 1 starting...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Function 1 finished.");
  }
  
  async function function2() {
    console.log("Function 2 starting...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Function 2 finished.");
  }
  
  async function function3() {
    console.log("Function 3 starting...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Function 3 finished.");
  }
  
  async function chainedAsyncFunctions() {
    await function1();
    await function2();
    await function3();
  }
  
  // Call the chained function
  chainedAsyncFunctions();
  