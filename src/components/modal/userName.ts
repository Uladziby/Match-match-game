export class UserName {
  public firstName = "";

  public lastName = "";

  public email = "";

  public set setFirstName(firstName: string) {
    this.firstName = firstName;

    console.log(this.firstName, "setName");
  }

  public set setLastName(lastName: string) {
    this.lastName = lastName;

    console.log(this.firstName, "setName");
  }

  public set setEmail(email: string) {
    this.email = email;
    console.log(this.firstName, "setName");
  }

  public get getName() {
    console.log(this.firstName, "getName");
    return `${this.firstName} ${this.lastName}`;
  }
}
