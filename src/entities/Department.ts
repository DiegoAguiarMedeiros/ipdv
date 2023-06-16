export default class Depatment {
  // TODO mudar _id para id
  public id?: string;

  public name: string;

  public costCenterId: number;

  public createdAt?: Date = null;

  public updatedAt?: Date = null;


  constructor(props: Depatment) {
    const {
      costCenterId,
      name
    } = props;

    if (!costCenterId) {
      throw new Error('Depatment: costCenterId is invalid.');
    }

    if (!name || name.length === 0) {
      throw new Error('Depatment: name is invalid.');
    }

    Object.assign(this, props);
  }
}