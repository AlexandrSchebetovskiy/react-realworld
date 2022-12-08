export interface User {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}
export interface AuthResponse {
  user: User;
}
export interface BackendErrors {
  [key: string]: string;
}
export interface LoginRequest {
  user: {
    email: string;
    password: string;
  };
}
export interface RegisterRequest {
  user: {
    email: string;
    password: string;
    username: string;
  };
}
