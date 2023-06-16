import { ICostCenterRepository } from '../../../repositories/ICostCenterRepository';

import CostCenter from '../../../entities/CostCenter';

export default class GetAllCostCenterUseCase {
  constructor(
    private costCenterRepository: ICostCenterRepository,
  ) { }

  execute = async (): Promise<CostCenter[]> => {
    return await this.costCenterRepository.getAll()
  };
}
