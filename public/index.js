console.log("js file connected");


let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', async () => {
   let result = await fetch("http:localhost:5000/get_data");
   console.log(result);
})

