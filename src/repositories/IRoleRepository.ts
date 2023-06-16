import Role from "../entities/Role";

export interface IRoleRepository {
  findById(id: number): Promise<Role>;
  roleExists(id: number): Promise<boolean>;
  getAllRoles(): Promise<Role[]>;
  save(role: Role): Promise<Role>;
  update(id: number, params: any): Promise<Role>;
  delete(id: number): Promise<void>;
}
