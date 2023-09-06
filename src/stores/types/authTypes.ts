export interface AuthState {
  isUserLogged: boolean;
}

export interface SignIn {
  email: string;
  password: string;
  successCallback?: () => void;
  errorCallback?: (error: string) => void;
}
