import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import Department from '../../../entities/Department';

export default class CreateDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) { }

  execute = async (
    name: string,
    costCenterId: number
  ): Promise<Department> => {
    const department = new Department({
      name,
      costCenterId
    });
    console.log('Department', Department)
    return await this.DepartmentRepository.save(department)
  };
}
