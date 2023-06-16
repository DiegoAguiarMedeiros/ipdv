import SequilezeRoleRepository from '../../../repositories/implementations/SequelizeRoleRepository';

import UpdateRoleUseCase from './UpdateRoleUseCase';
import UpdateRoleController from './UpdateRoleController';

const sequilezeRoleRepository = new SequilezeRoleRepository();

const updateRoleUseCase = new UpdateRoleUseCase(
  sequilezeRoleRepository,
);

const updateRoleController = new UpdateRoleController(updateRoleUseCase);

export default updateRoleController;
