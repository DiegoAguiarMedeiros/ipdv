import { Request, Response } from 'express';
import GetDepartmentCostCenterUseCase from './GetCostCenterUseCase';
import logger from '../../../config/logger';

export default class GetDepartmentCostCenterController {
  constructor(private GetDepartmentCostCenterUseCase: GetDepartmentCostCenterUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params } = req;
    const costCenterId = params.id;
    try {
      const result = await this.GetDepartmentCostCenterUseCase.execute(costCenterId);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
