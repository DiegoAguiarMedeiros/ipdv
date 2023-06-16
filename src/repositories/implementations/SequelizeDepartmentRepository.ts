import { IDepartmentRepository } from '../IDepartmentRepository';
import Department from '../../entities/Department';
import DepartmentModel from '../models/DepartmentModel';

export default class SequelizeDepartmentRepository implements IDepartmentRepository {
    async departmentExists(id: number): Promise<boolean> {
        const result = await DepartmentModel.findOne({ where: { id } });
        return result !== null;
    }
    async findById(id: number): Promise<Department> {
        const result = await DepartmentModel.findOne({ where: { id } });
        return new Department({ ...result.dataValues });
    }
    async getAll(): Promise<Department[]> {
        const result = await DepartmentModel.findAll();
        return result.map((department) => new Department({ ...department.dataValues }));
    }
    async save(department: Department): Promise<Department> {
        const newDepartment = DepartmentModel.build({ ...department });
        const savedDepartment = await newDepartment.save()
        return new Department({ ...savedDepartment.dataValues })
    }
    async update(id: number, params: any): Promise<Department> {
        try {
            const department = await DepartmentModel.findByPk(id);
            if (!department) {
                throw new Error('department not found');
            }
            Object.assign(department, params);
            const savedDepartment = await department.save()
            return new Department({ ...savedDepartment.dataValues })
        } catch (error) {
            throw new Error('Failed to update department');
        }
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}