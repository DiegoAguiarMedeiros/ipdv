import CostCenter from "../entities/CostCenter";

export interface ICostCenterRepository {
  findById(costCenterId: string): Promise<CostCenter>;
  getAllCostCenters(): Promise<CostCenter[]>;
  save(costCenter: CostCenter): Promise<CostCenter>;
  update(costCenterId: string, params: any): Promise<CostCenter>;
  delete(costCenterId: string): Promise<void>;
}
