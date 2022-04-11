import * as express from 'express';
import IController from '../interface/controller.interface';

export default class TasksController implements IController {
  public path: string = '/tasks';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllTasks);
    this.router.get(this.path + ':id', this.showTask);
    this.router.post(this.path, this.createATask);
    this.router.patch(this.path + ':id', this.updateATask);
    this.router.delete(this.path + ':id', this.deleteATask);
  }

  getAllTasks = (request: express.Request, response: express.Response) => {
    response.send('all');
  }

  showTask = (request: express.Request, response: express.Response) => {
    response.send('one');
  }

  createATask = (request: express.Request, response: express.Response) => {
    response.send('create');
  }

  updateATask = (request: express.Request, response: express.Response) => {
    response.send('update');
  }

  deleteATask = (request: express.Request, response: express.Response) => {
    response.send('delete');
  }
}
