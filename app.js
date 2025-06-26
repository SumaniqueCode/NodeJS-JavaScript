// const express  = require('express');
// const app = express();

//Alternate Method
const app = require('express')()

//for setting up routes
app.get('/', (req, res) => {
    res.send('Hello World!') // send a response back to the client
})
app.get('/test', (req, res) => { // the client will make a GET request to this route
    res.send('This is test page')
})

//for listening the server
app.listen(3000, (req, res) => { // the server will run in port 3000
    console.log('Server is running on port 3000')
})