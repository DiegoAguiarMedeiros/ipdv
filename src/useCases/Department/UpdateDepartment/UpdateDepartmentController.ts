import { Request, Response } from 'express';
import UpdateDepartmentUseCase from './UpdateDepartmentUseCase';
import logger from '../../../config/logger';

export default class UpdateDepartmentController {
  constructor(private UpdateDepartmentUseCase: UpdateDepartmentUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const departmentId = params.id;
    const {
      name,
      costCenterId
    } = body;

    try {
      const result = await this.UpdateDepartmentUseCase.execute(
        departmentId,
        name,
        costCenterId,
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
