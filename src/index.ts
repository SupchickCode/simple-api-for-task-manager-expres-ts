import App from './app';
import TasksController from './controllers/tasks.controller';

require('dotenv').config();

const port: number | string = process.env.PORT || 3000;

const app = new App(
  [
    new TasksController(),
  ],
  port,
);

app.listen();