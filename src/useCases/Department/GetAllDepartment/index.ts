import SequilezeDepartmentRepository from '../../../repositories/implementations/SequelizeDepartmentRepository';

import GetAllDepartmentUseCase from './GetAllDepartmentUseCase';
import GetAllDepartmentController from './GetAllDepartmentController';

const sequilezeDepartmentRepository = new SequilezeDepartmentRepository();

const getAllDepartmentUseCase = new GetAllDepartmentUseCase(
  sequilezeDepartmentRepository,
);

const getAllDepartmentController = new GetAllDepartmentController(getAllDepartmentUseCase);

export default getAllDepartmentController;
