const taskService = require('../services/taskService');

// Função para ler o body
const getRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            resolve(JSON.parse(body));
        });
    });
};

// Criar tarefa
const createTask = async (req, res) => {
    const body = await getRequestBody(req);

    const task = taskService.addTask(body.title);

    res.statusCode = 201;
    res.end(JSON.stringify(task));
};

// Listar tarefas
const listTasks = (req, res) => {
    const tasks = taskService.getTasks();

    res.statusCode = 200;
    res.end(JSON.stringify(tasks));
};

//Pesquisar tarefas por Id
const getTaskById = (req, res, id) => {
    const task = taskService.getTaskById(id);
    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify({ message: "Tarefa não encontrada" }));
    }
    res.end(JSON.stringify(task));
};

// Atualizar tarefa
const updateTask = async (req, res, id) => {
    const body = await getRequestBody(req);

    const task = taskService.updateTask(id, body);

    if (!task) {
        res.statusCode = 404;
        return res.end(JSON.stringify(
            { message: 'Tarefa não encontrada' }
        ));
    }

    res.statusCode = 200;
    res.end(JSON.stringify(task));
};

// Deletar tarefa
const deleteTask = (req, res, id) => {
    const success = taskService.deleteTask(id);

    if (!success) {
        res.statusCode = 404;
        return res.end(JSON.stringify( 
            { message: 'Tarefa não encontrada' } 
        )); 
    }

    res.end(JSON.stringify({ message: 'Tarefa removida' }));

};

module.exports = {
    createTask,
    listTasks,
    getTaskById,
    updateTask,
    deleteTask
};