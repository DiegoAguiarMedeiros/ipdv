import { Request, Response } from 'express';
import GetAllDepartmentCostCenterUseCase from './GetAllCostCenterUseCase';
import logger from '../../../config/logger';

export default class GetAllDepartmentCostCenterController {
  constructor(private GetAllDepartmentCostCenterUseCase: GetAllDepartmentCostCenterUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.GetAllDepartmentCostCenterUseCase.execute();
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
