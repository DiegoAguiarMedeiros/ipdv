export interface IValidatorService {
  validateEmail(email: string): boolean;
  validatePassword(PASSWORD: string): boolean;
}
