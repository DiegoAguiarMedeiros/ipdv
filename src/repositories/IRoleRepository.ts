import Role from "../entities/Role";

export interface IRoleRepository {
  findById(roleId: string): Promise<Role>;
  getAllRoles(): Promise<Role[]>;
  save(role: Role): Promise<Role>;
  update(roleId: string, params: any): Promise<Role>;
  delete(roleId: string): Promise<void>;
}
