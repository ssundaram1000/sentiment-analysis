export class RegistrationAttributes {
  name: string;
  email: string;
}

export class RegistrationUser {
  username: string;
  password: string;
  attributes: RegistrationAttributes;

  constructor() {
    this.attributes = new RegistrationAttributes();
  }
}
