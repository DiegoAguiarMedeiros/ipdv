import BCryptService from '../../../services/implementations/BCryptService';
import ValidatorService from '../../../services/implementations/ValidatorService';
import SequilezeUserRepository from '../../../repositories/implementations/SequelizeUserRepository';
import SequilezeRoleRepository from '../../../repositories/implementations/SequelizeRoleRepository';
import SequilezeDepartmentRepository from '../../../repositories/implementations/SequelizeDepartmentRepository';

import UpdateUserUseCase from './UpdateUserUseCase';
import UpdateUserController from './UpdateUserController';

const sequilezeUserRepository = new SequilezeUserRepository();
const sequilezeRoleRepository = new SequilezeRoleRepository();
const sequilezeDepartmentRepository = new SequilezeDepartmentRepository();

const bcryptService = new BCryptService();
const validatorService = new ValidatorService();

const updateUserUseCase = new UpdateUserUseCase(
  sequilezeUserRepository,
  sequilezeRoleRepository,
  sequilezeDepartmentRepository,
  bcryptService,
  validatorService,
);

const updateUserController = new UpdateUserController(updateUserUseCase);

export default updateUserController;
