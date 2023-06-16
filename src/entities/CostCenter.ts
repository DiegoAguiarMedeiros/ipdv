export default class CostCenter {
  // TODO mudar _id para id
  public id?: string;

  public name: string;

  public createdAt?: Date = null;

  public updatedAt?: Date = null;


  constructor(props: CostCenter) {
    const {
      name
    } = props;

    if (!name || name.length === 0) {
      throw new Error('CostCenter: name is invalid.');
    }

    Object.assign(this, props);
  }
}