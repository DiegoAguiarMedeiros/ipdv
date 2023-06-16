import { IValidatorService } from '../IValidatorService';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export default class ValidatorService implements IValidatorService {
  validateEmail(email: string): boolean {
    if (email) {
      return emailRegex.test(email);
    }

    return false;
  }
  validatePassword(password: string): boolean {
    if (password) {
      return passwordRegex.test(password);
    }

    return false;
  }
}
