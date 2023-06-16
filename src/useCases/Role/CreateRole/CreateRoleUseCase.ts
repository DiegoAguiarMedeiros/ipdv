import { IRoleRepository } from '../../../repositories/IRoleRepository';

import Role from '../../../entities/Role';

export default class CreateRoleUseCase {
  constructor(
    private RoleRepository: IRoleRepository,
  ) { }

  execute = async (
    name: string,
  ): Promise<Role> => {
    const role = new Role({
      name
    });
    return await this.RoleRepository.save(role)
  };
}
