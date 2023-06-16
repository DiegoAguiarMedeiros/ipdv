import { Request, Response } from 'express';
import UpdateDepartmentCostCenterUseCase from './UpdateCostCenterUseCase';
import logger from '../../../config/logger';

export default class UpdateDepartmentCostCenterController {
  constructor(private UpdateDepartmentCostCenterUseCase: UpdateDepartmentCostCenterUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const costCenterId = params.id;
    const {
      name
    } = body;

    try {
      const result = await this.UpdateDepartmentCostCenterUseCase.execute(
        name,
        costCenterId
      );
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
