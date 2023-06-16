import Department from "../entities/Department";

export interface IDepartmentRepository {
  findById(departmentId: string): Promise<Department>;
  getAllDepartments(): Promise<Department[]>;
  save(department: Department): Promise<Department>;
  update(departmentId: string, params: any): Promise<Department>;
  delete(departmentId: string): Promise<void>;
}
