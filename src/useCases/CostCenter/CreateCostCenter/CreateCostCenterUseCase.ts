import { ICostCenterRepository } from '../../../repositories/ICostCenterRepository';

import CostCenter from '../../../entities/CostCenter';

export default class CreateCostCenterUseCase {
  constructor(
    private costCenterRepository: ICostCenterRepository,
  ) { }

  execute = async (
    name: string,
  ): Promise<CostCenter> => {
    const costCenter = new CostCenter({
      name
    });
    return await this.costCenterRepository.save(costCenter)
  };
}
