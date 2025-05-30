import { Sequelize } from 'sequelize';
import db from '../db/db.js';


const directory = db.define(
	'Directory',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
        tableName: 'Directory'
    }
);

export default directory;
