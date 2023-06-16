import Department from "../entities/Department";

export interface IDepartmentRepository {
  findById(id: string): Promise<Department>;
  departmentExists(id: number): Promise<boolean>;
  getAllDepartments(): Promise<Department[]>;
  save(department: Department): Promise<Department>;
  update(id: string, params: any): Promise<Department>;
  delete(id: string): Promise<void>;
}
