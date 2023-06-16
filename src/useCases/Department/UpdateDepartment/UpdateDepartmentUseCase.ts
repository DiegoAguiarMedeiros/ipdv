import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import Department from '../../../entities/Department';

export default class UpdateDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) { }

  execute = async (
    name?: string,
    costCenterId?: number,
    departmentId?: number
  ): Promise<Department> => {

    const oldDepartment = await this.DepartmentRepository.findById(departmentId)

    const department = new Department({
      ...oldDepartment,
      name: name ? name : oldDepartment.name,
      costCenterId: costCenterId ? costCenterId : oldDepartment.costCenterId
    });
    console.log('Department', Department)
    return await this.DepartmentRepository.update(departmentId, department)
  };
}
