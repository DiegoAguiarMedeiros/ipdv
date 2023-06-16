import Department from "../entities/Department";

export interface IDepartmentRepository {
  findById(id: number): Promise<Department>;
  departmentExists(id: number): Promise<boolean>;
  getAll(): Promise<Department[]>;
  save(department: Department): Promise<Department>;
  update(id: number, params: any): Promise<Department>;
  delete(id: number): Promise<void>;
}
