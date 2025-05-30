import express from 'express';
const router = express.Router();
import ToDoController from '../controller/controllerToDo.js';
import DirectoryController from '../controller/controllerDirectory.js';

router.get('/', (req, res) => {
	return res.json({ message: 'Api To-do List' });
});

// ROTAS DE DIRETÓRIO
router.post('/directoryCreate', DirectoryController.DirectoryCreate);
router.get('/directoryListar', DirectoryController.DirectoryList);
router.put('/directoryUpdate/:id', DirectoryController.DirectoryUpdate);
router.delete('/directoryDelete/:id', DirectoryController.DirectoryDelete);

// ROTAS DE TAREFAS
router.post('/tarefaCreate', ToDoController.ToDoCreate);
router.get('/tarefaList', ToDoController.ToDoList);
router.get('/tarefaList/:id', ToDoController.ToDoListDirectory);
router.put('/tarefaUpdate/:id', ToDoController.ToDoUpdate);
router.delete('/tarefaDelete/:id', ToDoController.ToDoDelete);
router.delete('/tarefaDeleteAll', ToDoController.ToDoDeleteAll);

export default router;
