import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import Department from '../../../entities/Department';

export default class GetAllDepartmentUseCase {
  constructor(
    private DepartmentRepository: IDepartmentRepository,
  ) { }

  execute = async (): Promise<Department[]> => {
    return await this.DepartmentRepository.getAll()
  };
}
