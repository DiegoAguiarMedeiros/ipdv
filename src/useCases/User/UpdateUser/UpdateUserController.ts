import { Request, Response } from 'express';
import UpdateUserUseCase from './UpdateUserUseCase';

export default class UpdateUserController {
  constructor(private UpdateUserUseCase: UpdateUserUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body, params } = req;
    const userId = params.id;
    const {
      username,
      email,
      roleId,
      departmentId
    } = body;

    try {
      const result = await this.UpdateUserUseCase.execute(
        userId,
        username,
        email,
        roleId,
        departmentId
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
