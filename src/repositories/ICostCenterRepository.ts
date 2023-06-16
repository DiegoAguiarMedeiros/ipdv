import CostCenter from "../entities/CostCenter";

export interface ICostCenterRepository {
  findById(id: number): Promise<CostCenter>;
  getAll(): Promise<CostCenter[]>;
  save(costCenter: CostCenter): Promise<CostCenter>;
  update(id: number, params: any): Promise<CostCenter>;
  delete(id: number): Promise<void>;
}
