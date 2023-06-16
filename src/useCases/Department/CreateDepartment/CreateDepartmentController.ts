import { Request, Response } from 'express';
import CreateDepartmentUseCase from './CreateDepartmentUseCase';
import logger from '../../../config/logger';

export default class CreateDepartmentController {
  constructor(private createDepartmentUseCase: CreateDepartmentUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const {
      name,
      costCenterId
    } = body;

    try {
      const result = await this.createDepartmentUseCase.execute(
        name,
        costCenterId
      );
      return res.status(201).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
