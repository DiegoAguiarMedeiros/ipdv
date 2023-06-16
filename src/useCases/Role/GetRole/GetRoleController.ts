import { Request, Response } from 'express';
import GetRoleUseCase from './GetRoleUseCase';

export default class GetRoleController {
  constructor(private GetRoleUseCase: GetRoleUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params } = req;
    const roleId = params.id;
    try {
      const result = await this.GetRoleUseCase.execute(roleId);
      return res.status(201).json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
