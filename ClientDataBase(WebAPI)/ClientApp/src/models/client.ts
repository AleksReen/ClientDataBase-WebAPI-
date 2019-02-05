export class Client {

  private id: number;
  public name: string = '';
  public address: string = '';
  public phone: string = '';
  public email: string = '';


  constructor(name: string, phone: string, address: string, email: string, id?: number) {

    this.name = name;
    this.phone = phone;
    this.address = address;
    this.email = email;

    if (id === null || id === undefined) {
      this.id = Math.random();
    } else {
      this.id = id;
    }
  }

  public get getId(): number {
    return this.id;
  }
}
