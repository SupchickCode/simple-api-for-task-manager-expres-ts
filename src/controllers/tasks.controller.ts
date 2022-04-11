import * as express from 'express';
import IController from '../interface/controller.interface';
 
export default class TasksController implements IController {
  public path : string = '/tasks';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllTasks);
    this.router.post(this.path, this.createAPost);
  }
 
  getAllTasks = (request: express.Request, response: express.Response) => {
    response.send('all');
  }
 
  createAPost = (request: express.Request, response: express.Response) => {
    response.send('create');
  }
}