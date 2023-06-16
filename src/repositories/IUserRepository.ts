import User from "../entities/User";

export interface IUserRepository {
  findById(id: string): Promise<User>;
  emailExist(email: string): Promise<boolean>;
  findByUsernameWithPassword(id: string): Promise<User>;
  getAllUsers(): Promise<User[]>;
  save(user: User): Promise<User>;
  update(id: string, params: any): Promise<User>;
  delete(id: string): Promise<void>;
}
