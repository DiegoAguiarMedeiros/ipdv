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
    async save(costCenter: CostCenter): Promise<CostCenter> {
        const newCostCenter = CostCenterModel.build({ ...costCenter });
        const savedCostCenter = await newCostCenter.save()
        return new CostCenter({ ...savedCostCenter.dataValues })
    }

    update(costCenterId: string, params: any): Promise<CostCenter> {
        throw new Error('Method not implemented.');
    }
    delete(costCenterId: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

}