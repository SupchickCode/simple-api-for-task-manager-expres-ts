import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const TaskModelSchema = new Schema({
    title: String,
    body: String,
    is_done: Boolean,
});

export const TaskModel = mongoose.model('TaskModel', TaskModelSchema); 