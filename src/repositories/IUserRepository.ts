import User from "../entities/User";

export interface IUserRepository {
  findById(userId: string): Promise<User>;
  emailExist(email: string): Promise<Boolean>;
  findByUsernameWithPassword(userId: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  save(user: User): Promise<User>;
  update(userId: string, params: any): Promise<User>;
  delete(userId: string): Promise<void>;
}
