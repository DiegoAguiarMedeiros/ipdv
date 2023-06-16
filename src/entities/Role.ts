export default class Role {
  // TODO mudar _id para id
  public id?: string;

  public name: string;

  public createAt?: Date = null;

  public updateAt?: Date = null;


  constructor(props: Role) {
    const {
      id,
      name
    } = props;

    if (!id) {
      throw new Error('Role: not found.');
    }

    if (!name || name.length === 0) {
      throw new Error('Role: name is invalid.');
    }

    Object.assign(this, props);
  }
}