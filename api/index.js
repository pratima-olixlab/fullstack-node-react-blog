require('./db');
require('./config/config');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require("path"); // Add this line for handling file paths

app.use(bodyParser.json());

const corsOrigin = {
    origin: 'http://localhost:3000', // or whatever port your frontend is using
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOrigin));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get("/", (req, resp) => {
    resp.json({
        message: "a simple api"
    })
})

const rtsIndex = require('./routes/app.routes');
app.use('/users', rtsIndex);

app.listen(5000, () => {
    console.log('app is running on 5000 port');
})