//Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

async function awaitCall() {
    try {
      // Simulate fetching data from an API (e.g., using fetch)
      const response = await fetch('https://api.example.com/data');
      
      // Check if the response was successful (status code 200)
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      
      // Parse the JSON data from the response
      const data = await response.json();
      
      // Log the data
      console.log('Data from API:', data);
    } catch (error) {
      // Handle errors gracefully
      console.error('Error fetching data:', error.message);
      console.error('Please try again later.');
    }
  }
  
  // calling this function
  awaitCall();
  