import { ICostCenterRepository } from '../ICostCenterRepository';
import CostCenter from '../../entities/CostCenter';
import CostCenterModel from '../models/CostCenterModel';

export default class SequelizeCostCenterRepository implements ICostCenterRepository {
    async findById(id: number): Promise<CostCenter> {
        const result = await CostCenterModel.findOne({ where: { id } });
        return new CostCenter({ ...result.dataValues });
    }
    async getAll(): Promise<CostCenter[]> {
        const result = await CostCenterModel.findAll();
        return result.map((costCenter) => new CostCenter({ ...costCenter.dataValues }));
    }
    async save(costCenter: CostCenter): Promise<CostCenter> {
        const newCostCenter = CostCenterModel.build({ ...costCenter });
        const savedCostCenter = await newCostCenter.save()
        return new CostCenter({ ...savedCostCenter.dataValues })
    }

    async update(id: number, params: any): Promise<CostCenter> {
        try {
            const costCenter = await CostCenterModel.findByPk(id);
            if (!costCenter) {
                throw new Error('CostCenter not found');
            }
            Object.assign(costCenter, params);
            const savedCostCenter = await costCenter.save()
            return new CostCenter({ ...savedCostCenter.dataValues })
        } catch (error) {
            throw new Error('Failed to update costCenter');
        }
    }
    delete(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }

}