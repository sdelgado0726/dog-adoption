import { Sequelize } from "sequelize";
import { DogFactory } from "./dog";

const dbName = 'petDB';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

DogFactory(sequelize);

export const db = sequelize;
