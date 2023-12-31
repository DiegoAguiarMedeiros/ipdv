import { Request, Response } from 'express';
import GetRoleUseCase from './GetRoleUseCase';
import logger from '../../../config/logger';

export default class GetRoleController {
  constructor(private GetRoleUseCase: GetRoleUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params } = req;
    const roleId = params.id;
    try {
      const result = await this.GetRoleUseCase.execute(roleId);
      return res.status(200).json(result);
    } catch (err) {
      logger.error(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
