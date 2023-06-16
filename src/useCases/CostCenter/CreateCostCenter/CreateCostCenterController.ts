import { Request, Response } from 'express';
import CreateDepartmentCostCenterUseCase from './CreateCostCenterUseCase';

export default class CreateDepartmentCostCenterController {
  constructor(private createDepartmentCostCenterUseCase: CreateDepartmentCostCenterUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const {
      name
    } = body;

    try {
      const result = await this.createDepartmentCostCenterUseCase.execute(
        name
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
