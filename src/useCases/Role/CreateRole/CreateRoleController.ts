import { Request, Response } from 'express';
import CreateRoleUseCase from './CreateRoleUseCase';
import logger from '../../../config/logger';

export default class CreateRoleController {
  constructor(private createRoleUseCase: CreateRoleUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const {
      name
    } = body;

    try {
      const result = await this.createRoleUseCase.execute(
        name
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
