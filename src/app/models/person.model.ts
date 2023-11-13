export class Person {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
  occupation?: string;
  imagePath?: string;
  cin?: number;
  quote?: string;
  constructor(
    id = 0,
    firstName = '',
    lastName = '',
    age = 0,
    occupation = '',
    imagePath = '',
    cin = 0,
    quote = '',
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.imagePath = imagePath;
    this.cin = cin;
    this.quote = quote;
  }
}
