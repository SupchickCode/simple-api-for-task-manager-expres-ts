import CreateTaskDto from '../dto/create.tast.dto';
import { TaskModel } from '../models/tasks.model';
import log from '../utils/logger';

export default class TasksService {

  getAllTasks = async () => {
    return await TaskModel.find({}, (error, tasks) => {
      return { 'tasks': tasks };
    })
  }

  showTask = (id: string) => {
    return TaskModel.find({ 'id': id }, (error, task) => {
      if (error) log.info(error);
      return { 'task': task };
    })
  }

  createTask = async (data: CreateTaskDto) => {
    return await TaskModel.create(data, (error, task) => {
       return { 'task': task };
    })
  }
}
