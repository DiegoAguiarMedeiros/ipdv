import SequilezeDepartmentRepository from '../../../repositories/implementations/SequelizeDepartmentRepository';

import CreateDepartmentUseCase from './CreateDepartmentUseCase';
import CreateDepartmentController from './CreateDepartmentController';

const sequilezeDepartmentRepository = new SequilezeDepartmentRepository();

const createDepartmentUseCase = new CreateDepartmentUseCase(
  sequilezeDepartmentRepository,
);

const createDepartmentController = new CreateDepartmentController(createDepartmentUseCase);

export default createDepartmentController;
