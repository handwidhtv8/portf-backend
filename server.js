// Dependencies
const express = require('express');
const cors = require('cors');

// Import JSON files
const projects = require("./projects.json");
const about = require('./about.json');

// App object
const app = express();

// Middleware
app.use(cors());


// home route
app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/projects", (req, res) => {
    // send project to via JSON
    res.json(projects);
});

app.get("/about", (req, res) => {
    // send project to via JSON
    res.json(about);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

