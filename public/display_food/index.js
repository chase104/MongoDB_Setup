// const { count } = require("../../models/fruit");

console.log("Display Page");
// get data stored in queries

let containerElement = document.getElementById('container');
let newNameInput = document.getElementById('new-name');

const getData = async () => {

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
      let value = params.idOfClickedItem; // 

    
    let data = await fetch("/get_food_data");
    data.json().then((parsedData) => {
        console.log(parsedData); // array of objects
        // map through and put in HTML
        // push each individual one,  or push an array of HTML 
        let counter = 0;
        let subContainerCounter=0;
        let newContainer = false;
        console.log(parsedData);
        parsedData.forEach((object) => {
            let pTag = document.createElement("p"); // <p></p>
            pTag.textContent = object.name; // <p>apple</p>
            pTag.id=object._id
            if (object.readyToEat !== true) {
                pTag.style.color = "red"
            } else {
                pTag.style.color = "green"
            }

            pTag.addEventListener('click', (event) => {
                console.log(event.target);
                console.log(event.target.id);
                window.location.href=`../single_food?idInQuery=${event.target.id}`
            })


            containerElement.appendChild(pTag)
        })
    })
}

getData()




// if ussDefeated - end loop
