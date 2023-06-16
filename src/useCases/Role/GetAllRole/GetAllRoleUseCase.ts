import { IRoleRepository } from '../../../repositories/IRoleRepository';

import Role from '../../../entities/Role';

export default class GetAllRoleUseCase {
  constructor(
    private RoleRepository: IRoleRepository,
  ) { }

  execute = async (): Promise<Role[]> => {
    return await this.RoleRepository.getAllRoles()
  };
}
