export default class User {
  // TODO mudar _id para id
  public id?: string;

  public username: string;

  public password: string;

  public createAt?: Date = null;

  public updateAt?: Date = null;

  public lastLogin?: Date = null;


  constructor(props: User) {
    const {
      id,
      password,
      username
    } = props;

    if (!id) {
      throw new Error('User: not found.');
    }


    if (!username || username.length === 0) {
      throw new Error('User: username is invalid.');
    }

    if (!id && (!password || password.length === 0)) {
      throw new Error('User: password is invalid.');
    }

    Object.assign(this, props);
  }
}
