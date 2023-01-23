console.log("Display Page");

let containerElement = document.getElementById('container')
let newNameInput = document.getElementById('new-name')
const getData = async () => {
    let data = await fetch("/get_food_data");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        parsedData.forEach((object) => {
            // if not ready to eat- red text
            let pTag = document.createElement("p"); // <p></p>
            pTag.textContent = object.name; // <p>apple</p>
            console.log(object._id);
            pTag.databaseId=object._id
            if (object.readyToEat !== true) {
                pTag.style.color = "red"
            } else {
                pTag.style.color = "green"
            }
            pTag.addEventListener('click',async  (event) => {
                console.log(event.target);
                console.log(event.target.databaseId);
                let newName = newNameInput.value;
                console.log(newName);
                let newData = {
                    newName,
                    id: event.target.databaseId
                }
                // make a call to server giving the ID of the thing to change
                // and data to change

                let response = await fetch('http://localhost:5000/update_fruit', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    // to send JSON data over HTTP
                    // give server 1. id 2. new data
                    body: JSON.stringify(newData)
                })
                console.log(response);

            })
            containerElement.appendChild(pTag);
        })
    })
}

getData()