const express = require("express");
const models = require('./models');
const apiRoutes = require('./routes_api');

 const server = () => {

  const app = express();

  app.get("/", async (req, res) => {
    const { User } = models;
    const user = User.build('mixassio@mail.ru');
    try {
      await user.save();
      const users = await User.findAll();
      res.status(200).json({ message: `Hello, World! count: ${users.length}` }).end();
    } catch (e) {
      res.status(401).json({ message: e }).end();
      console.error(e);
    }
  });

  app.use('/v1', apiRoutes)
  return app;
};

module.exports = server;
