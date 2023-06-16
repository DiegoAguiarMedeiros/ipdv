export default class User {
  // TODO mudar _id para id
  public id?: string;

  public username: string;

  public email: string;

  public password: string;

  public createAt?: Date = null;

  public updateAt?: Date = null;

  public lastLogin?: Date = null;


  constructor(props: User) {
    const {
      password,
      email,
      username
    } = props;

    if (!username || username.length === 0) {
      throw new Error('User: username is invalid.');
    }

    if (!email || email.length === 0) {
      throw new Error('User: email is invalid.');
    }

    if (!password || password.length === 0) {
      throw new Error('User: password is invalid.');
    }

    Object.assign(this, props);
  }
}
