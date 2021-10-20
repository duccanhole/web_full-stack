const express = require('express');
const app = express();
const cors = require('cors');
//module connect mongodb
const db = require('./database/db');
//module route
const route = require('./route');

const port = 8080||process.env.PORT;

//enable CORS require
app.use(cors());
//parse body from POST request
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//connect to mongodb
db.connect();

//Path to route
route(app);

//Run server
app.listen(port,()=>{
    console.log('server running at http://localhost:8080');
})