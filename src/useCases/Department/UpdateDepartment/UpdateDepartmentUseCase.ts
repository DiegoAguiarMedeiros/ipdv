import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import Department from '../../../entities/Department';

export default class UpdateDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) { }

  execute = async (
    departmentId: number,
    name?: string,
    costCenterId?: number
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
