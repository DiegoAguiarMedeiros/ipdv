import SequilezeRoleRepository from '../../../repositories/implementations/SequelizeRoleRepository';

import GetAllRoleUseCase from './GetAllRoleUseCase';
import GetAllRoleController from './GetAllRoleController';

const sequilezeRoleRepository = new SequilezeRoleRepository();

const getAllRoleUseCase = new GetAllRoleUseCase(
  sequilezeRoleRepository,
);

const getAllRoleController = new GetAllRoleController(getAllRoleUseCase);

export default getAllRoleController;
