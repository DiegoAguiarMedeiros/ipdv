import { Request, Response } from 'express';
import UpdateRoleUseCase from './UpdateRoleUseCase';
import logger from '../../../config/logger';

export default class UpdateRoleController {
  constructor(private UpdateRoleUseCase: UpdateRoleUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const roleId = params.id;
    const {
      name
    } = body;

    try {
      const result = await this.UpdateRoleUseCase.execute(
        name,
        roleId
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
