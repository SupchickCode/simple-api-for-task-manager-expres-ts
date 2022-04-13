import express from "express";
import UpdateTaskDto from '../dto/update.tasks.dto';
import { TaskModel } from '../models/tasks.model';

export default class TasksService {

  getAllTasks = async () => {
    return await TaskModel.find({});
  }

  showTask = async (id: string) => {
    return await TaskModel.findById(id)
      .catch(() => 'Not found');
  }

  createTask = async (data: express.Request) => {
    return await TaskModel.create(data);
  }

  updateTask = async (id: string, data: express.Request) => {
    return await TaskModel.findOneAndUpdate({ _id: id }, data, {new: true})
      .catch(() => 'Not found');
  }

  deleteTask = async (id: string) => {
    return await TaskModel.deleteOne({ _id: id })
      .catch(() => 'Not found');
  }
}
