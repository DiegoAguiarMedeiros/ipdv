import SequilezeRoleRepository from '../../../repositories/implementations/SequelizeRoleRepository';

import GetRoleUseCase from './GetRoleUseCase';
import GetRoleController from './GetRoleController';

const sequilezeRoleRepository = new SequilezeRoleRepository();

const getRoleUseCase = new GetRoleUseCase(
  sequilezeRoleRepository,
);

const getRoleController = new GetRoleController(getRoleUseCase);

export default getRoleController;
