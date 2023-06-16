import { IUserRepository } from '../../../repositories/IUserRepository';
import User from '../../../entities/User';

export default class GetUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  execute = async (userId: number): Promise<User> => {
    return await this.userRepository.findById(userId)
  };
}
