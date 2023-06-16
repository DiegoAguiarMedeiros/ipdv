import { IUserRepository } from '../../../repositories/IUserRepository';
import { IRoleRepository } from '../../../repositories/IRoleRepository';
import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import { ICryptService } from '../../../services/ICryptService';
import { IValidatorService } from '../../../services/IValidatorService';
import User from '../../../entities/User';

export default class UpdateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private roleRepository: IRoleRepository,
    private departmentRepository: IDepartmentRepository,
    private cryptService: ICryptService,
    private validatorService: IValidatorService,
  ) { }

  execute = async (
    userId: number,
    username?: string,
    email?: string,
    roleId?: number,
    departmentId?: number
  ): Promise<User> => {
    const userEmailIsvalid =
      this.validatorService.validateEmail(email);
    if (email && !userEmailIsvalid) {
      throw new Error('UpdateUserUseCase: user email is not valid.');
    }
    const roleExists = roleId ? await this.roleRepository.roleExists(roleId) : false;

    if (roleId && !roleExists) {
      throw new Error('UpdateUserUseCase: role not exists.');
    }
    const departmentExists = departmentId ? await this.departmentRepository.departmentExists(departmentId) : false;

    if (departmentId && !departmentExists) {
      throw new Error('UpdateUserUseCase: department not exists.');
    }
    const userEmailAlreadyExists = email ? await this.userRepository.emailExist(email) : false;

    if (userEmailAlreadyExists) {
      throw new Error('UpdateUserUseCase: user email already exists.');
    }
    const usenameAlreadyExists = username ? await this.userRepository.usernameExist(username) : false;

    if (usenameAlreadyExists) {
      throw new Error('UpdateUserUseCase: username already exists.');
    }

    const oldUser = await this.userRepository.findById(userId)
    console.log('oldUser', oldUser)
    const user = new User({
      ...oldUser,
      username: username ? username : oldUser.username,
      email: email ? email : oldUser.email,
      roleId: roleId ? roleId : oldUser.roleId,
      departmentId: departmentId ? departmentId : oldUser.departmentId,
    });
    console.log('user', user)
    return await this.userRepository.update(userId, user)
  };
}
