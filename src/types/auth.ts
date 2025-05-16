export interface User {
  username: string; // will store email as username here
}

export interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

export interface RegisterPayload {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface IFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFormInput {
  email: string;
  password: string;
}
