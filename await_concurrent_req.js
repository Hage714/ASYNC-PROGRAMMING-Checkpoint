// Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved
/*async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([
            fetchData('https://api.example.com/endpoint1'),
            fetchData('https://api.example.com/endpoint2')
        ]);

        console.log("Combined Results:");
        console.log("Result 1:", result1);
        console.log("Result 2:", result2);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

concurrentRequests();
*/


async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async function concurrentRequests() {
    const url1 = "https://api.example.com/data1"; // Replace with your actual API endpoint 1
    const url2 = "https://api.example.com/data2"; // Replace with your actual API endpoint 2
  
    try {
      // Create promises for each API call
      const promise1 = fetchData(url1);
      const promise2 = fetchData(url2);
  
      // Use Promise.all to wait for both promises to resolve concurrently
      const [data1, data2] = await Promise.all([promise1, promise2]);
  
      // Combine and log the results
      const combinedData = {
        data1,
        data2,
      };
      console.log("Combined results:", combinedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  concurrentRequests();
  