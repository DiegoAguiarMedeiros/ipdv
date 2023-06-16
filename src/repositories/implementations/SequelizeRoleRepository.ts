import { IRoleRepository } from '../IRoleRepository';
import Role from '../../entities/Role';
import RoleModel from '../models/RoleModel';

export default class SequelizeRoleRepository implements IRoleRepository {
    async roleExists(id: number): Promise<boolean> {
        const result = await RoleModel.findOne({ where: { id } });
        return result !== null;
    }
    findById(id: string): Promise<Role> {
        throw new Error('Method not implemented.');
    }
    getAllRoles(): Promise<Role[]> {
        throw new Error('Method not implemented.');
    }
    async save(role: Role): Promise<Role> {
        const newRole = RoleModel.build({ ...role });
        const savedRole = await newRole.save()
        return new Role({ ...savedRole.dataValues })
    }
    update(id: string, params: any): Promise<Role> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}