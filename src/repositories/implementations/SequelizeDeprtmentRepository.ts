import { IDepartmentRepository } from '../IDepartmentRepository';
import Department from '../../entities/Department';
import DepartmentModel from '../models/DepartmentModel';

export default class SequelizeDepartmentRepository implements IDepartmentRepository {
    findById(departmentId: string): Promise<Department> {
        throw new Error('Method not implemented.');
    }
    getAllDepartments(): Promise<Department[]> {
        throw new Error('Method not implemented.');
    }
    async save(department: Department): Promise<Department> {
        const newDepartment = DepartmentModel.build({ ...department });
        const savedDepartment = await newDepartment.save()
        return new Department({ ...savedDepartment.dataValues })
    }
    update(departmentId: string, params: any): Promise<Department> {
        throw new Error('Method not implemented.');
    }
    delete(departmentId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}