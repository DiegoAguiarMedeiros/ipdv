import { IRoleRepository } from '../../../repositories/IRoleRepository';

import Role from '../../../entities/Role';

export default class UpdateRoleUseCase {
  constructor(
    private RoleRepository: IRoleRepository,
  ) { }

  execute = async (
    name: string,
    roleId: number,
  ): Promise<Role> => {
    const role = new Role({
      name
    });
    return await this.RoleRepository.update(roleId, role)
  };
}
