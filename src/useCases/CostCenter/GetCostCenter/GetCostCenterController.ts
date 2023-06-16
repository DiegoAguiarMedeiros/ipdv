import { Request, Response } from 'express';
import GetDepartmentCostCenterUseCase from './GetCostCenterUseCase';

export default class GetDepartmentCostCenterController {
  constructor(private GetDepartmentCostCenterUseCase: GetDepartmentCostCenterUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { params } = req;
    const costCenterId = params.id;
    try {
      const result = await this.GetDepartmentCostCenterUseCase.execute(costCenterId);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  };
}
