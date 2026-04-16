# To-Do List: React + Node.js (Módulo HTTP Nativo)

Este é um projeto de um gerenciador de tarefas desenvolvido com Node.js para o backend e React para o frontend. Ele permite aos usuários adicionar, listar, atualizar e excluir tarefas, além de organizá-las por ordem alfabética ou por data.

---

## Descrição do Projeto
O objetivo deste projeto é fornecer uma plataforma simples de gerenciamento de tarefas, onde o usuário pode interagir com o sistema através de uma interface de usuário (frontend) e um servidor backend para processar as requisições.

No backend, temos um servidor que oferece uma API RESTful para manipulação das tarefas (CRUD), enquanto o frontend exibe as tarefas armazenadas localmente no navegador, permitindo uma interação direta do usuário.

---

## Tecnologias Utilizadas

### Backend:
- Node.js
- File System (fs) para persistência de dados
- JSON para armazenamento de dados no arquivo tasks.json

### Frontend:
- React.js
- Local Storage para persistência no lado do cliente

---

## Instalação

Para rodar este projeto, você precisa de um ambiente de desenvolvimento com Node.js e npm instalados. Além disso, é necessário instalar as dependências do backend e frontend separadamente.

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- Terminal de comandos (PowerShell, Bash, etc).

### 1. Clonar o Projeto
```bash
git clone https://github.com/PedroHGMelim/atvPW-III.git
cd atvPW-III
```

### 2. Configurar o Back-end
# Entrar na pasta do backend
```bash
cd backend-my-to-do-list
```
# Instalar as dependências
```bash
npm install
```
# Iniciar o servidor
```bash
node src/app.js
```
O servidor estará funcionando em: http://localhost:3000

### 3. Configurar o Front-end
Abra um novo terminal e execute:
# Entrar na pasta do frontend
```bash
cd my-to-do-list
```
# Instalar as dependências do React
```bash
npm install
```
# Iniciar a aplicação
```bash
npm run dev
```
Aplicativo estará funcionando no link que aparecer no terminal (ex: http://localhost:5173).

---

## Explicação da Solução

### Backend
O backend é construído utilizando o Node.js e oferece uma API RESTful para manipulação das tarefas. As operações básicas de CRUD (Create, Read, Update, Delete) são realizadas por meio de requisições HTTP.

- POST /tasks: Cria uma nova tarefa.
- GET /tasks: Retorna todas as tarefas.
- GET /tasks/:id: Retorna uma tarefa específica pelo ID.
- PUT /tasks/:id: Atualiza uma tarefa existente.
- DELETE /tasks/:id: Deleta uma tarefa existente.

Essas operações manipulam o arquivo tasks.json para persistir as tarefas, garantindo que as alterações feitas sejam salvas entre as reinicializações do servidor.

### Frontend
O frontend foi desenvolvido com React.js e mantém as tarefas no Local Storage para persistência local. As funcionalidades principais incluem:

- Adicionar Tarefa: Permite adicionar uma nova tarefa.
- Remover Tarefa: Permite remover tarefas.
- Marcar como Concluída: Permite marcar tarefas como concluídas.
- Ordenação: Permite ordenar as tarefas por ordem alfabética ou por data.

As tarefas são renderizadas em uma lista, e ao interagir com elas, os dados são salvos diretamente no Local Storage do navegador.

### Como o problema foi resolvido
- Persistência de Dados: Para persistência de dados no backend, utilizamos um arquivo JSON (tasks.json), onde as tarefas são lidas e salvas no sistema de arquivos. Não foi utilizado um banco de dados real, pois o foco foi em uma solução simples para o gerenciamento de tarefas.
- Interface Simples e Eficiente: No frontend, as tarefas são armazenadas no Local Storage do navegador para que, mesmo após a reinicialização da aplicação, as tarefas não sejam perdidas. A interface React foi projetada para ser simples e fácil de usar, permitindo uma interação intuitiva com a lista de tarefas.
- Organização de Tarefas: O frontend permite ao usuário organizar as tarefas por ordem alfabética ou por data, utilizando funções de ordenação do JavaScript.

---

## Vídeo para demonstração
Se desejar apenas ver o vídeo demonstração, segue o link do Youtube:
```bash
https://youtu.be/P-63b_pFBmI?si=ffCA6rzO3ZtR0oe-
```
