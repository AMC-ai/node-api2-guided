const express = require('express');

const hubsRouter = require("../hubs/hubs-router") // **** 1

// const Hubs = require('../hubs/hubs-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('/api/hubs', hubsRouter); // **** 2

//export default server; // ES6 Modules
module.exports = server;