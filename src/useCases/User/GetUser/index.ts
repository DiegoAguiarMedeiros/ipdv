import SequilezeUserRepository from '../../../repositories/implementations/SequelizeUserRepository';

import UpdateUserUseCase from './GetUserUseCase';
import UpdateUserController from './GetUserController';

const sequilezeUserRepository = new SequilezeUserRepository();

const updateUserUseCase = new UpdateUserUseCase(
  sequilezeUserRepository
);

const updateUserController = new UpdateUserController(updateUserUseCase);

export default updateUserController;
