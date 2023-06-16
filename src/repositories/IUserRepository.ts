import User from "../entities/User";

export interface IUserRepository {
  findById(id: number): Promise<User>;
  emailExist(email: string): Promise<boolean>;
  usernameExist(username: string): Promise<boolean>;
  findByUsernameWithPassword(id: string): Promise<User>;
  getAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  update(id: number, params: any): Promise<User>;
  delete(id: number): Promise<void>;
}
