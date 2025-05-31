import ToDo from '../model/ToDoModel.js';

class ToDoController {
	static async ToDoCreate(req, res) {
		const { title, date, description, directoryId, important, completed } = req.body;
		const toDo = { title, date, description, directoryId, important, completed };
		await ToDo.create(toDo);
		res.json({ message: 'Tarefa cadastrado com sucesso!' });
	}

	static async ToDoList(req, res) {
		const toDo = await ToDo.findAll();
		const toDoFormatado = toDo.map((tarefa) => ({
			...tarefa.dataValues,
			date: tarefa.date ? tarefa.date.toISOString().split('T')[0] : '',
		}));
		res.json(toDoFormatado);
	}

	static async ToDoListDirectory(req, res) {
		const directoryId = req.params.id;
		const toDo = await ToDo.findAll({ where: { directoryId } });
		res.json(toDo);
	}

	static async ToDoUpdate(req, res) {
		const id = req.params.id;
		const { title, date, description, directoryId, important, completed } = req.body;
		await ToDo.update({ title, date, description, directoryId, important, completed }, { where: { id } });
		res.json({ message: 'Tarefa atualizada com sucesso!' });
	}

	static async ToDoDelete(req, res) {
		const id = req.params.id;
		await ToDo.destroy({ where: { id } });
		res.json({ message: 'Tarefa deletada com sucesso!' });
	}

	static async ToDoDeleteAll(req, res) {
		await ToDo.destroy({ where: {} });
		res.json({ message: 'Tarefas deletadas com sucesso!' });
	}
}

export default ToDoController;
