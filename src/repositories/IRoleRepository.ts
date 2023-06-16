import Role from "../entities/Role";

export interface IRoleRepository {
  findById(id: string): Promise<Role>;
  roleExists(id: number): Promise<boolean>;
  getAllRoles(): Promise<Role[]>;
  save(role: Role): Promise<Role>;
  update(id: string, params: any): Promise<Role>;
  delete(id: string): Promise<void>;
}
