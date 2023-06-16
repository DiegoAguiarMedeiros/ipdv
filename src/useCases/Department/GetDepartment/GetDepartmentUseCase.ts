import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import Department from '../../../entities/Department';

export default class GetDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) { }

  execute = async (
    departmentId
  ): Promise<Department> => {
    return await this.DepartmentRepository.findById(departmentId)
  };
}
