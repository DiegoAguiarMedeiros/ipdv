import logger from './logger';
import sequelize from './sequelize';

const initDB = async () => {
    sequelize
        .authenticate()
        .then(() => {
            logger.info('Conexão estabelecida com sucesso!');
        })
        .catch((error) => {
            logger.error('Erro ao conectar-se ao banco de dados:', error);
        });
};

export default initDB;