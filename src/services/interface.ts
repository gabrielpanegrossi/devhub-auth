export interface ValidateEmail {
  isValid: boolean;
}

export interface Register {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
}
