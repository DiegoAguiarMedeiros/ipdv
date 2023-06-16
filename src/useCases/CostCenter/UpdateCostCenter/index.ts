import SequilezeCostCenterRepository from '../../../repositories/implementations/SequelizeCostCenterRepository';

import UpdateCostCenterUseCase from './UpdateCostCenterUseCase';
import UpdateCostCenterController from './UpdateCostCenterController';

const sequilezeCostCenterRepository = new SequilezeCostCenterRepository();

const updateCostCenterUseCase = new UpdateCostCenterUseCase(
  sequilezeCostCenterRepository,
);

const updateCostCenterController = new UpdateCostCenterController(updateCostCenterUseCase);

export default updateCostCenterController;
