import { Sequelize } from 'sequelize';
import db from '../db/db.js';
import directory from './DirectoryModel.js';

const ToDoList = db.define(
	'ToDoList',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		date: {
			type: Sequelize.DATEONLY,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		directoryId: {
			type: Sequelize.INTEGER,
			references: {
				model: 'Directory',
				key: 'id',
			},
		},
		important: {
			type: Sequelize.BOOLEAN,
		},
		completed: {
			type: Sequelize.BOOLEAN,
		},
	},
	{
		tableName: 'ToDoList',
	}
);

ToDoList.belongsTo(directory, { foreignKey: 'directoryId' });
directory.hasMany(ToDoList, { foreignKey: 'directoryId' });

export default ToDoList;
