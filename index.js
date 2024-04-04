//function that takes two arguments and returns fetched data
function submitData(name,email){
    //make a post request to localhost:3000/users with the name and email as parameters in the body
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(res => res.json())//parse the response into json format 
    .then(object => document.body.innerHTML = object.id)//display id of created user on html page
    .catch(error => document.body.innerHTML = error.message)//if any error occurs print it in the console
}
