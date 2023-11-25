export class UserState {
  id: string;
  email: string;
  authenticated: boolean;

  constructor(id: string, email: string, authenticated: boolean) {
    this.id = id;
    this.email = email;
    this.authenticated = authenticated;
  }
}
