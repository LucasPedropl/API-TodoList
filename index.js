import express from 'express';
import db from './db/db.js';
import routes from './routes/routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

db.sync()
	.then(async () => {
		console.log('Sincronização bem sucedida');
		app.listen(port, () => {
			console.log(`Servidor rodando na porta ${port}`);
		});
	})
	.catch((erro) => {
		console.log('Houve uma falha ao sincronizar com o banco de dados. ', erro);
	});
