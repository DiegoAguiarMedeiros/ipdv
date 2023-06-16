import { IUserRepository } from '../../../repositories/IUserRepository';
import { IRoleRepository } from '../../../repositories/IRoleRepository';
import { IDepartmentRepository } from '../../../repositories/IDepartmentRepository';

import { ICryptService } from '../../../services/ICryptService';
import { IValidatorService } from '../../../services/IValidatorService';
import User from '../../../entities/User';

export default class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private roleRepository: IRoleRepository,
    private departmentRepository: IDepartmentRepository,
    private cryptService: ICryptService,
    private validatorService: IValidatorService,
  ) { }

  execute = async (
    username: string,
    email: string,
    password: string,
    roleId: number,
    departmentId: number
  ): Promise<User> => {
    const userEmailIsvalid =
      this.validatorService.validateEmail(email);
    if (!userEmailIsvalid) {
      throw new Error('CreateUserUseCase: user email is not valid.');
    }
    const userPasswordIsvalid =
      this.validatorService.validatePassword(password);
    if (!userPasswordIsvalid) {
      throw new Error('CreateUserUseCase: user password is not valid.');
    }
    const roleExists =
      await this.roleRepository.roleExists(roleId);

    if (!roleExists) {
      throw new Error('CreateUserUseCase: role not exists.');
    }
    const departmentExists =
      await this.departmentRepository.departmentExists(departmentId);

    if (!departmentExists) {
      throw new Error('CreateUserUseCase: department not exists.');
    }
    const userEmailAlreadyExists =
      await this.userRepository.emailExist(email);

    if (userEmailAlreadyExists) {
      throw new Error('CreateUserUseCase: user email already exists.');
    }

    const passwordHash = await this.cryptService.hash(password);

    const user = new User({
      username,
      email,
      password: passwordHash,
      roleId,
      departmentId
    });
    return await this.userRepository.save(user)
  };
}
