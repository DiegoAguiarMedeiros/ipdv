import SequilezeUserRepository from '../../../repositories/implementations/SequelizeUserRepository';

import GetAllUserUseCase from './GetAllUserUseCase';
import GetAllUserController from './GetAllController';

const sequilezeUserRepository = new SequilezeUserRepository();


const getAllUserUseCase = new GetAllUserUseCase(
  sequilezeUserRepository
);

const getAllUserController = new GetAllUserController(getAllUserUseCase);

export default getAllUserController;
