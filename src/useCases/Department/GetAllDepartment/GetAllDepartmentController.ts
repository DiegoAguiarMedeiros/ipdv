import { Request, Response } from 'express';
import GetAllDepartmentUseCase from './GetAllDepartmentUseCase';

export default class GetAllDepartmentController {
  constructor(private GetAllDepartmentUseCase: GetAllDepartmentUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {

    try {
      const result = await this.GetAllDepartmentUseCase.execute();
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
