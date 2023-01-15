export class User {
  constructor(
    public id: string,
    public pseudo: string,
    public email: string,
    public password: string
  ) {
    this.id = id;
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
  }
}
