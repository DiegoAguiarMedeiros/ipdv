import { Request, Response } from 'express';
import UpdateUserUseCase from './GetAllUserUseCase';
import logger from '../../../config/logger';

export default class UpdateUserController {
  constructor(private UpdateUserUseCase: UpdateUserUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {

    try {
      const result = await this.UpdateUserUseCase.execute();
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
