import { IUserRepository } from '../IUserRepository';
import User from '../../entities/User';
import UserModel from '../models/UserModel';

export default class SequelizeUserRepository implements IUserRepository {
    async emailExist(email: string): Promise<Boolean> {
        const result = await UserModel.findOne({ where: { email } });
        return result !== null;
    }
    findByUsernameWithPassword(userId: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    findById(userId: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    getAllUsers(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }
    async save(user: User): Promise<User> {
        const newUser = UserModel.build({ ...user });
        newUser.save()
            .then((savedUser) => {
                return savedUser.dataValues 
            })
            .catch((error) => {
                console.error('Error saving user:', error);
            });
    }
    update(userId: string, params: any): Promise<User> {
        throw new Error('Method not implemented.');
    }
    delete(userId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}