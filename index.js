// Add your code here
function submitData(name, email) {
    const configurationObject = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
     }),
};
return fetch("http://localhost:3000/users", configurationObject)
.then(function (response) {
    return response.json();
})
.then(function (object) {
    const body = document.querySelector('body')
    body.append(object.id);
})
.catch(function (error) {
    alert("Correction needed!");
    const body = document.querySelector('body')
    body.append(error.message);
});
}

