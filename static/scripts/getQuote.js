const quote = document.querySelector("#quote-text");


const makeApiCall = () => {
    // Fetch the quote from the API
    fetch('https://b89kzgs30c.execute-api.us-east-1.amazonaws.com/prod/')
      .then(response => response.json())
      .then(data => {
        // Update the quote text with the response from the API
        quote.innerHTML = data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }
  