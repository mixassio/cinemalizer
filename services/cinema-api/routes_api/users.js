
const users = require("express").Router();

users.get('/users', (req, res) => {
        res.status(200).json({ message: 'Connected users!' }).end();
      })


module.exports = users;
