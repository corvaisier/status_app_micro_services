let express = require('express');
let app = express();
require('dotenv').config();

let mysql = require('mysql');

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 27017
    //'mysql://user:pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700'
});

database.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    res.send('Hi There')
});

app.get('/status', (req, res) => {
    res.send('ok')
});

app.listen(process.env.PORT, console.log("app run"));