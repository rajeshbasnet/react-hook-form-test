export interface User {
  username: string;
  email: string;
  channel: string;
  numbers: string[];
  currentNumber : string;
  phNumbers: {
    number: string;
  }[];
}
