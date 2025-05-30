import { Sequelize } from 'sequelize';

const db = new Sequelize({
	dialect: 'sqlite',
	storage: 'ToDoList.sqlite',
});

export default db;
