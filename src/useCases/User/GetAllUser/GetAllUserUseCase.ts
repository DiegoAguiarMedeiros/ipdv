import { IUserRepository } from '../../../repositories/IUserRepository';
import User from '../../../entities/User';

export default class GetAllUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) { }

  execute = async (): Promise<User[]> => {
    return await this.userRepository.getAll()
  };
}
