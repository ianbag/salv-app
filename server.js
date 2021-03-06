//Require
const express = require('express');
const path = require('path');

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/dist/salv-app'));
}

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://drvida-api.herokuapp.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/salv-app/index.html'))
})

app.listen(process.env.PORT || 8080)