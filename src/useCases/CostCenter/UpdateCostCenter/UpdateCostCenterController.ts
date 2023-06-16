import { Request, Response } from 'express';
import UpdateDepartmentCostCenterUseCase from './UpdateCostCenterUseCase';

export default class UpdateDepartmentCostCenterController {
  constructor(private UpdateDepartmentCostCenterUseCase: UpdateDepartmentCostCenterUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const costCenterId = params.id;
    const {
      name
    } = body;

    try {
      const result = await this.UpdateDepartmentCostCenterUseCase.execute(
        name,
        costCenterId
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
