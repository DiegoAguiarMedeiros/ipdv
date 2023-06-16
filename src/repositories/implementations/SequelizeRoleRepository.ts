import { IRoleRepository } from '../IRoleRepository';
import Role from '../../entities/Role';
import RoleModel from '../models/RoleModel';

export default class SequelizeRoleRepository implements IRoleRepository {
    findById(roleId: string): Promise<Role> {
        throw new Error('Method not implemented.');
    }
    getAllRoles(): Promise<Role[]> {
        throw new Error('Method not implemented.');
    }
    save(role: Role): Promise<Role> {
        throw new Error('Method not implemented.');
    }
    update(roleId: string, params: any): Promise<Role> {
        throw new Error('Method not implemented.');
    }
    delete(roleId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}