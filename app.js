// const express  = require('express');
// const app = express();

//Alternate Method
const app = require('express')()

//for setting up routes
app.get('/', (req, res) => {
    res.send('Hello World!') // send a response back to the client
})
app.get('/test', (req, res) => {
    res.send('Hello Test!') // send a response back to the client
})
app.get('/profile', (req, res) => { // the client will make a GET request to this route
    res.json({
        'name': 'John Doe',
        'age': 30,
        'email': 'johndoe@example.com',
        'address': "China town",
    }) // send a JSON response back to the client
})

//for listening the server
app.listen(3000, (req, res) => { // the server will run in port 3000
    console.log('Server is running on port 3000...')
    console.log('Click the link given below to open in browser')
    console.log('http://127.0.0.1:3000')
    console.log('Press Ctrl+C to exit!')
})