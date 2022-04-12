import * as express from 'express';
import CreateTaskDto from '../dto/create.tast.dto';
import IController from '../interface/controller.interface';
import { TaskModel } from '../models/tasks.model';
import TasksService from '../services/tasks.service';

export default class TasksController implements IController {
  public path: string = '/tasks';
  public router = express.Router();
  public service = new TasksService();

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
    TaskModel.find({}, (error, tasks) => {
      response.send({ 'tasks': tasks });
    })
  }

  showTask = (request: express.Request, response: express.Response) => {
    response.send('one');
  }

  createATask = (request: express.Request, response: express.Response) => {
    const data: CreateTaskDto = request.body;

    TaskModel.create(data, (error, task) => {
      if (task) response.send(task);
    })
  }

  updateATask = (request: express.Request, response: express.Response) => {
    response.send('update');
  }

  deleteATask = (request: express.Request, response: express.Response) => {
    response.send('delete');
  }
}
