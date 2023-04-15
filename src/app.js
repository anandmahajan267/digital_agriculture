const express = require('express');

const userRouter = require('./routes/user.router');

const UserController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.post('/login', UserController.loginUser);

// It is important to export the `app` constant,
// so it can be used by the `src/server.js` file
module.exports = app;
