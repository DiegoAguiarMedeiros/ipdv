import { Request, Response } from 'express';
import CreateUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { body } = req;
    const {
      username,
      email,
      password,
      roleId,
      departmentId
    } = body;

    try {
      const result = await this.createUserUseCase.execute(
        username,
        email,
        password,
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
