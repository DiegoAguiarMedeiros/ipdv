import SequilezeCostCenterRepository from '../../../repositories/implementations/SequelizeCostCenterRepository';

import GetAllCostCenterUseCase from './GetAllCostCenterUseCase';
import GetAllCostCenterController from './GetAllCostCenterController';

const sequilezeCostCenterRepository = new SequilezeCostCenterRepository();

const getAllCostCenterUseCase = new GetAllCostCenterUseCase(
  sequilezeCostCenterRepository,
);

const getAllCostCenterController = new GetAllCostCenterController(getAllCostCenterUseCase);

export default getAllCostCenterController;
