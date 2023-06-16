import SequilezeCostCenterRepository from '../../../repositories/implementations/SequelizeCostCenterRepository';

import CreateCostCenterUseCase from './CreateCostCenterUseCase';
import CreateCostCenterController from './CreateCostCenterController';

const sequilezeCostCenterRepository = new SequilezeCostCenterRepository();

const createCostCenterUseCase = new CreateCostCenterUseCase(
  sequilezeCostCenterRepository,
);

const createCostCenterController = new CreateCostCenterController(createCostCenterUseCase);

export default createCostCenterController;
