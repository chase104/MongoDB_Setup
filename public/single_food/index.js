console.log("js running");

// get the id from the URL
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  console.log(params);
  let id = params.id; 
console.log(id);

// use that ID to get info from collection
const getSingleFruit = async () => {
    let response = await fetch(`http://localhost:5000/get_single_fruit_using_id/${id}`);

    let finalData = await response.json();

    console.log(finalData);


    
    let container = document.querySelector('container')
    container.innerHTML = `
    <div class="single-product">
        <h1>${finalData.name}</h1>
        <img class="product-img" src="" alt="">
        <div>description</div>
    </div>
    `
    // use this finalData to make some tags, etc.
}

getSingleFruit()
 

const updateFruit = async () => {
    let response = await fetch(`http://localhost:5000/update_one`,
    // example of code to update fruit
    {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        // get id and other data from your front end usind document.getElementById for example
        // body: JSON.stringify(dataObject)
    }
    );

    let finalData = await response.json();

    console.log(finalData);
    // use this finalData to m
}


// display that data in HTML