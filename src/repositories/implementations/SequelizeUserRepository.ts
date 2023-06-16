import { IUserRepository } from '../IUserRepository';
import User from '../../entities/User';
import UserModel from '../models/UserModel';

export default class SequelizeUserRepository implements IUserRepository {
    async emailExist(email: string): Promise<boolean> {
        const result = await UserModel.findOne({ where: { email } });
        return result !== null;
    }
    async usernameExist(username: string): Promise<boolean> {
        const result = await UserModel.findOne({ where: { username } });
        return result !== null;
    }
    findByUsernameWithPassword(id: string): Promise<User> {
        throw new Error('Method not implemented.');
    }
    async findById(id: number): Promise<User> {
        const result = await UserModel.findOne({ where: { id } });
        return new User({ ...result.dataValues });
    }
    async getAll(): Promise<User[]> {
        const result = await UserModel.findAll({
            attributes: { exclude: ['password'] },
          });
        console.log('result', result)
        return result.map((user) => new User({ ...user.dataValues }));
    }
    async save(user: User): Promise<User> {
        const newUser = UserModel.build({ ...user });
        const savedUser = await newUser.save()
        return new User({ ...savedUser.dataValues })
    }
    async update(id: number, params: any): Promise<User> {
        try {
            const user = await UserModel.findByPk(id);
            if (!user) {
                throw new Error('user not found');
            }
            Object.assign(user, params);
            const savedUser = await user.save()
            return new User({ ...savedUser.dataValues })
        } catch (error) {
            throw new Error('Failed to update user');
        }
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}