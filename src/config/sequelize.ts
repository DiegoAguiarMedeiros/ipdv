import { Sequelize } from 'sequelize';
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: 'postgres',
    }
);

export default sequelize;