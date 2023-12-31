import { Request, Response } from 'express';
import GetUserUseCase from './GetUserUseCase';
import logger from '../../../config/logger';

export default class GetUserController {
  constructor(private GetUserUseCase: GetUserUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const {  params } = req;
    const userId = params.id;
    try {
      const result = await this.GetUserUseCase.execute(
        userId
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
