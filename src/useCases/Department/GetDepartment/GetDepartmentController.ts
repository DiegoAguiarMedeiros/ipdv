import { Request, Response } from 'express';
import GetAllDepartmentUseCase from './GetDepartmentUseCase';
import logger from '../../../config/logger';

export default class GetAllDepartmentController {
  constructor(private GetAllDepartmentUseCase: GetAllDepartmentUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params } = req;
    const departmentId = params.id;
    try {
      const result = await this.GetAllDepartmentUseCase.execute(departmentId);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
