import SequilezeCostCenterRepository from '../../../repositories/implementations/SequelizeCostCenterRepository';

import GetCostCenterUseCase from './GetCostCenterUseCase';
import GetCostCenterController from './GetCostCenterController';

const sequilezeCostCenterRepository = new SequilezeCostCenterRepository();

const getCostCenterUseCase = new GetCostCenterUseCase(
  sequilezeCostCenterRepository,
);

const getCostCenterController = new GetCostCenterController(getCostCenterUseCase);

export default getCostCenterController;
