export interface AuthState {
  isUserLogged: boolean;
}

export interface LogInPayload {
  payload: {
    email: string;
    password: string;
    successCallback?: () => null | void;
    errorCallback?: () => null | void;
  }
}
