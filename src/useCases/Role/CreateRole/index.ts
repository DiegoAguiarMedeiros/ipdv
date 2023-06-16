import SequilezeRoleRepository from '../../../repositories/implementations/SequelizeRoleRepository';

import CreateRoleUseCase from './CreateRoleUseCase';
import CreateRoleController from './CreateRoleController';

const sequilezeRoleRepository = new SequilezeRoleRepository();

const createRoleUseCase = new CreateRoleUseCase(
  sequilezeRoleRepository,
);

const createRoleController = new CreateRoleController(createRoleUseCase);

export default createRoleController;
