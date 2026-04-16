const http = require('http');

// Importa as rotas
const taskRoutes = require('./routes/taskRoutes');

// Cria o servidor
const server = http.createServer((req, res) => {

    // Define cabeçalho JSON
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    // CORS
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Chama o roteador
    taskRoutes (req, res);
});

// Porta
const PORT= 3000;

// Inicia servidor
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});