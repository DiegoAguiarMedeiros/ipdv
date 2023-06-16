import { Request, Response } from 'express';
import GetAllRoleUseCase from './GetAllRoleUseCase';

export default class GetAllRoleController {
  constructor(private GetAllRoleUseCase: GetAllRoleUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const result = await this.GetAllRoleUseCase.execute();
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
