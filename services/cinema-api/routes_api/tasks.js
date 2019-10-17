
const tasks = require("express").Router();

tasks.get('/tasks', (req, res) => {
        res.status(200).json({ message: 'Connected tasks!' }).end();
      })


module.exports = tasks;
