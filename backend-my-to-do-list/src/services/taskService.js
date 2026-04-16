const fs = require('fs');
const path = require('path');
const { createTask } = require('../models/taskModel');

// Caminho para o arquivo do banco de dados em json
const filePath = path.join(__dirname, '../../data/tasks.json');

// Função para ler os dados no arquivo
const readTasks = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return []; // Se o arquivo não existir ou estiver vazio retorna um array vazio
    }
};

// Função para salvar os dados no arquivo
const saveTasks = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
};

const taskService = {
    getTasks: () => readTasks(),

    getTaskById: (id) => {
        const tasks = readTasks();
        return tasks.find(t => t.id == id);
    },

    addTask: (title) => {
        const tasks = readTasks();
        // Gera um ID baseado na última tarefa ou 1
        const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
        const newTask = createTask(lastId + 1, title);
        
        tasks.push(newTask);
        saveTasks(tasks);
        return newTask;
    },

    updateTask: (id, data) => {
        let tasks = readTasks();
        const index = tasks.findIndex(t => t.id == id);
        
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...data };
            saveTasks(tasks);
            return tasks[index];
        }
        return null;
    },

    deleteTask: (id) => {
        let tasks = readTasks();
        const initialLength = tasks.length;
        tasks = tasks.filter(t => t.id != id);
        
        if (tasks.length < initialLength) {
            saveTasks(tasks);
            return true;
        }
        return false;
    }
};

module.exports = taskService;