// store, a JS object as JSON string, in local storage under the key "user"
localStorage.setItem('user', JSON.stringify({name: 'Aaron'}));

// get our user from local storage and convert it back to a JS Object
JSON.parse(localStorage.getItem('user'))