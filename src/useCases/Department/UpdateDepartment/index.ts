import SequilezeDepartmentRepository from '../../../repositories/implementations/SequelizeDepartmentRepository';

import UpdateDepartmentUseCase from './UpdateDepartmentUseCase';
import UpdateDepartmentController from './UpdateDepartmentController';

const sequilezeDepartmentRepository = new SequilezeDepartmentRepository();

const updateDepartmentUseCase = new UpdateDepartmentUseCase(
  sequilezeDepartmentRepository,
);

const updateDepartmentController = new UpdateDepartmentController(updateDepartmentUseCase);

export default updateDepartmentController;
