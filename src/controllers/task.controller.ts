import { Request, Response } from 'express';
import TaskService from '../services/task.service';

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await TaskService.createTask(req.body);
        res.status(201).json({ message: 'Tarefa criada com sucesso!', task });
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ error: err.message || 'Erro ao criar tarefa' });
    }
};

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await TaskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar as tarefas' });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        const updatedTask = await TaskService.updateTask(req.params.id, req.body);
        res.json(updatedTask);
    } catch (error) {
        const err = error as Error;
        res.status(400).json({ error: err.message || 'Erro ao atualizar tarefa' });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await TaskService.deleteTask(req.params.id);
        res.json({ message: 'Tarefa removida com sucesso' });
    } catch (error) {
        const err = error as Error;
        res.status(500).json({ error: err.message || 'Erro ao excluir tarefa' });
    }
};
