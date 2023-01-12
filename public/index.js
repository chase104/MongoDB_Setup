console.log("js file connected");


let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
    // send a request to Express 
    // result is the response from the server
   let result = await fetch("/get_data");
   let finalData = await result.json()
   console.log(finalData);
})

