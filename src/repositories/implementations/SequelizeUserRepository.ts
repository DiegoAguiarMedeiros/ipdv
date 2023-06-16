import { IUserRepository } from '../IUserRepository';
import User from '../../entities/User';
import UserModel from '../models/UserModel';

export default class SequelizeUserRepository implements IUserRepository {
    async emailExist(email: string): Promise<boolean> {
        const result = await UserModel.findOne({ where: { email } });
        return result !== null;
    }
    findByUsernameWithPassword(id: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    getAllUsers(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    async save(user: User): Promise<User> {
        const newUser = UserModel.build({ ...user });
        const savedUser = await newUser.save()
        return new User({ ...savedUser.dataValues })
    }
    update(id: string, params: any): Promise<User> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}