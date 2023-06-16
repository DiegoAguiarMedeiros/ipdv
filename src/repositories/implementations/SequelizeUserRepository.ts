import { IUserRepository } from '../IUserRepository';
import User from '../../entities/User';
import UserModel from '../models/UserModel';

export default class SequelizeUserRepository implements IUserRepository {
    findById(userId: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    getAllUsers(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    save(user: User): Promise<User> {
        throw new Error('Method not implemented.');
    }
    update(userId: string, params: any): Promise<User> {
        throw new Error('Method not implemented.');
    }
    delete(userId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}