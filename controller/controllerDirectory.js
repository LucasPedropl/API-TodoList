import Directory from '../model/DirectoryModel.js';

class DirectoryController {
	static async DirectoryCreate(req, res) {
		const { name } = req.body;
		const directory = { name };
		await Directory.create(directory);
		const msg = 'Directory cadastrado com sucesso!';
		res.json({ message: msg });
		console.log(msg);
	}

	static async DirectoryList(req, res) {
		const directory = await Directory.findAll();
		res.json(directory);
	}

	static async DirectoryUpdate(req, res) {
		const id = req.params.id;
		const { name } = req.body;
		await Directory.update({ name }, { where: { id } });
		res.json({ message: 'Directory atualizado com sucesso!' });
	}

	static async DirectoryDelete(req, res) {
		const id = req.params.id;
		await Directory.destroy({ where: { id } });
		res.json({ message: 'Directory deletado com sucesso!' });
	}
}

export default DirectoryController;
