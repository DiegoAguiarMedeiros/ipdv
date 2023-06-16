export default class User {
  // TODO mudar _id para id
  public id?: string;

  public username: string;

  public email: string;

  public password: string;

  public roleId: number;

  public departmentId: number;

  public createdAt?: Date = null;

  public updatedAt?: Date = null;

  public lastLogin?: Date = null;


  constructor(props: User) {
    const {
      roleId,
      departmentId,
      password,
      email,
      username
    } = props;

    if (!roleId) {
      throw new Error('User: roleId is invalid.');
    }
    if (!departmentId) {
      throw new Error('User: departmentId is invalid.');
    }
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
