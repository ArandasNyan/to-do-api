import mongoose, { Document, Schema } from 'mongoose';

// Interface para tipagem
export interface ITask extends Document {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

// Definição do Schema do Mongoose
const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// Criando e exportando o modelo
const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
export default TaskModel;
