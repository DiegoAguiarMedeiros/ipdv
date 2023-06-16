import { ICostCenterRepository } from '../../../repositories/ICostCenterRepository';

import CostCenter from '../../../entities/CostCenter';

export default class GetCostCenterUseCase {
  constructor(
    private costCenterRepository: ICostCenterRepository,
  ) { }

  execute = async (
    costCenterId: number
  ): Promise<CostCenter> => {
    return await this.costCenterRepository.findById(costCenterId)
  };
}
