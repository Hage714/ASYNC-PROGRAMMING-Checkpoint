// Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

async function awaitCall() {
    // Simulate API call (replace with actual fetch API call)
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Simulating API data" });
      }, 1000);  // Simulate delay (replace with actual API call duration)
    });
  
    console.log("API data:", response);
  }
  
  // Call the async function
  awaitCall();
  
  