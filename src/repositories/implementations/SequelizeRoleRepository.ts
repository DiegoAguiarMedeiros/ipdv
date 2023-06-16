import { IRoleRepository } from '../IRoleRepository';
import Role from '../../entities/Role';
import RoleModel from '../models/RoleModel';

export default class SequelizeRoleRepository implements IRoleRepository {
    async roleExists(id: number): Promise<boolean> {
        const result = await RoleModel.findOne({ where: { id } });
        return result !== null;
    }
    findById(id: number): Promise<Role> {
        throw new Error('Method not implemented.');
    }
    async getAllRoles(): Promise<Role[]> {
        const result = await RoleModel.findAll();
        console.log('result', result)
        return result.map((role) => new Role({ ...role.dataValues }));
    }
    async save(role: Role): Promise<Role> {
        const newRole = RoleModel.build({ ...role });
        const savedRole = await newRole.save()
        return new Role({ ...savedRole.dataValues })
    }
    async update(id: number, params: any): Promise<Role> {
        try {
            const role = await RoleModel.findByPk(id);
            if (!role) {
                throw new Error('Role not found');
            }
            Object.assign(role, params);
            const savedRole = await role.save()
            return new Role({ ...savedRole.dataValues })
        } catch (error) {
            throw new Error('Failed to update role');
        }
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}