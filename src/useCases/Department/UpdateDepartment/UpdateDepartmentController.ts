import { Request, Response } from 'express';
import UpdateDepartmentUseCase from './UpdateDepartmentUseCase';

export default class UpdateDepartmentController {
  constructor(private UpdateDepartmentUseCase: UpdateDepartmentUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const departmentId = params.id;
    const {
      name,
      costCenterId
    } = body;

    try {
      const result = await this.UpdateDepartmentUseCase.execute(
        departmentId,
        name,
        costCenterId,
      );
      return res.status(201).json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
