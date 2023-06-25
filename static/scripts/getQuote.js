const quote = document.querySelector("#quote-text");

// const change = () => {
//     quote.innerHTML = "Hello, world!";
// }


const makeApiCall = () => {
    // Fetch the quote from the API
    fetch('https://epnwsvwojcduq5kfp7iz4vczoe0muwwe.lambda-url.us-east-1.on.aws/')
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
  