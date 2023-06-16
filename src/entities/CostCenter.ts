export default class CostCenter {
  // TODO mudar _id para id
  public id: string;

  public name: string;

  public createAt?: Date = null;

  public updateAt?: Date = null;


  constructor(props: CostCenter) {
    const {
      id,
      name
    } = props;

    if (!id) {
      throw new Error('CostCenter: not found.');
    }

    if (!name || name.length === 0) {
      throw new Error('CostCenter: name is invalid.');
    }

    Object.assign(this, props);
  }
}