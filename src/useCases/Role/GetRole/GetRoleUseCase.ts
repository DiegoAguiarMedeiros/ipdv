import { IRoleRepository } from '../../../repositories/IRoleRepository';

import Role from '../../../entities/Role';

export default class GetRoleUseCase {
  constructor(
    private RoleRepository: IRoleRepository,
  ) { }

  execute = async (
    roleId: number
  ): Promise<Role> => {
    return await this.RoleRepository.findById(roleId)
  };
}
