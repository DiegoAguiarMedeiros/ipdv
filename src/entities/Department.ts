export default class Depatment {
  // TODO mudar _id para id
  public id: string;

  public name: string;

  public createAt?: Date = null;

  public updateAt?: Date = null;


  constructor(props: Depatment) {
    const {
      id,
      name
    } = props;

    if (!id) {
      throw new Error('Depatment: not found.');
    }

    if (!name || name.length === 0) {
      throw new Error('Depatment: name is invalid.');
    }

    Object.assign(this, props);
  }
}