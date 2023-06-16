import { ICostCenterRepository } from '../../../repositories/ICostCenterRepository';

import CostCenter from '../../../entities/CostCenter';

export default class CreateCostCenterUseCase {
  constructor(
    private CostCenterRepository: ICostCenterRepository,
  ) { }

  execute = async (
    name: string,
  ): Promise<CostCenter> => {
    const costCenter = new CostCenter({
      name
    });
    console.log('costCenter',costCenter)
    return await this.CostCenterRepository.save(costCenter)
  };
}
