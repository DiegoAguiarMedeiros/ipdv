import SequilezeDepartmentRepository from '../../../repositories/implementations/SequelizeDepartmentRepository';

import GetAllDepartmentUseCase from './GetDepartmentUseCase';
import GetAllDepartmentController from './GetDepartmentController';

const sequilezeDepartmentRepository = new SequilezeDepartmentRepository();

const getAllDepartmentUseCase = new GetAllDepartmentUseCase(
  sequilezeDepartmentRepository,
);

const getAllDepartmentController = new GetAllDepartmentController(getAllDepartmentUseCase);

export default getAllDepartmentController;
