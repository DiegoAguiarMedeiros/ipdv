import BCryptService from '../../../services/implementations/BCryptService';
import ValidatorService from '../../../services/implementations/ValidatorService';
import SequilezeUserRepository from '../../../repositories/implementations/SequelizeUserRepository';
import SequilezeRoleRepository from '../../../repositories/implementations/SequelizeRoleRepository';
import SequilezeDepartmentRepository from '../../../repositories/implementations/SequelizeDepartmentRepository';

import CreateUserUseCase from './CreateUserUseCase';
import CreateUserController from './CreateUserController';

const sequilezeUserRepository = new SequilezeUserRepository();
const sequilezeRoleRepository = new SequilezeRoleRepository();
const sequilezeDepartmentRepository = new SequilezeDepartmentRepository();

const bcryptService = new BCryptService();
const validatorService = new ValidatorService();

const createUserUseCase = new CreateUserUseCase(
  sequilezeUserRepository,
  sequilezeRoleRepository,
  sequilezeDepartmentRepository,
  bcryptService,
  validatorService,
);

const createUserController = new CreateUserController(createUserUseCase);

export default createUserController;
