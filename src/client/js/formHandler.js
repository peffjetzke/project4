import fetch from "node-fetch";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userInput = document.getElementById('name').value
    
    /*Validate URL here, if statement*/
    //Client.isValidURL(userInput);

    console.log("::: Form Submitted :::"); //Tell user form was submitted
    console.log("User Input:", userInput); //Just checking the input

    //if the URL is good then start sent the user data to POST for MeaningCloud API
    if(Client.isValidURL(userInput)){ 
        console.log("URL is good", userInput);
        fetch('http://localhost:8081/post', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({userInput})
        })
        .then(res => res.json()) 
        .then(function(res) { //call UpdateUI here, I think. Should reference Proj 3
            console.log(res.message);
            document.getElementById('results').innerHTML = res.message
        })
    }else{
        console.log("URL IS BAD! TRY AGAIN!");
    }
    
}


/*Update UI*/
//seperate method for updating UI

export { handleSubmit }
