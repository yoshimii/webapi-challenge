const express = require('express');
const server = express();
const helmet = require('helmet');
const actionsRouter = require('./routers/action-router');
const projectsRouter = require('./routers/projects-router');

//middlware, if any
server.use(helmet());
server.use(express.json());
server.use('/', projectsRouter, actionsRouter);

module.exports = server;