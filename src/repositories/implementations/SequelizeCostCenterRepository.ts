import { ICostCenterRepository } from '../ICostCenterRepository';
import CostCenter from '../../entities/CostCenter';
import CostCenterModel from '../models/CostCenterModel';

export default class SequelizeCostCenterRepository implements ICostCenterRepository {
    findById(costCenterId: string): Promise<CostCenter> {
        throw new Error('Method not implemented.');
    }
    getAllCostCenters(): Promise<CostCenter[]> {
        throw new Error('Method not implemented.');
    }
    save(costCenter: CostCenter): Promise<CostCenter> {
        throw new Error('Method not implemented.');
    }
    update(costCenterId: string, params: any): Promise<CostCenter> {
        throw new Error('Method not implemented.');
    }
    delete(costCenterId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}