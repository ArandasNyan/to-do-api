import TaskModel from '../models/task.model';

class TaskService {
    static async createTask(taskData: { title: string; description: string; completed?: boolean }) {
        const task = await TaskModel.create(taskData);
        return task;
    }

    static async getAllTasks() {
        return await TaskModel.find();
    }

    static async updateTask(id: string, taskData: any) {
        const task = await TaskModel.findByIdAndUpdate(id, taskData, { new: true });
        if (!task) throw new Error('Tarefa não encontrada');
        return task;
    }

    static async deleteTask(id: string) {
        const task = await TaskModel.findByIdAndDelete(id);
        if (!task) throw new Error('Tarefa não encontrada');
    }
}

export default TaskService;
