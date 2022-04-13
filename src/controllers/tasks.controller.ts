import * as express from 'express';
import IController from '../interface/controller.interface';
import TasksService from '../services/tasks.service';
import validate from '../middleware/validate.request';
import createTasksDto from '../dto/create.tasks.dto';

export default class TasksController implements IController {
  public path: string = '/tasks/';
  public router = express.Router();
  public service = new TasksService();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllTasks);
    this.router.get(this.path + ':id', this.showTask);
    this.router.post(this.path, validate(createTasksDto), this.createATask);
    this.router.patch(this.path + ':id', this.updateTask);
    this.router.delete(this.path + ':id', this.deleteTask);
  }

  getAllTasks = async (request: express.Request, response: express.Response) => {
    response.send(await this.service.getAllTasks());
  }

  showTask = async (request: express.Request, response: express.Response) => {
    response.send(await this.service.showTask(request.params.id));
  }

  createATask = async (request: express.Request, response: express.Response) => {
    response.send(await this.service.createTask(request.body));
  }

  updateTask = async (request: express.Request, response: express.Response) => {
    response.send(await this.service.updateTask(request.params.id, request.body));
  }

  deleteTask = async (request: express.Request, response: express.Response) => {
    response.send(await this.service.deleteTask(request.params.id));
  }
}
