import { ICostCenterRepository } from '../../../repositories/ICostCenterRepository';

import CostCenter from '../../../entities/CostCenter';

export default class UpdateCostCenterUseCase {
  constructor(
    private costCenterRepository: ICostCenterRepository,
  ) { }

  execute = async (
    name: string,
    costCenterId: number,
  ): Promise<CostCenter> => {
    const costCenter = new CostCenter({
      name
    });
    return await this.costCenterRepository.update(costCenterId, costCenter)
  };
}
