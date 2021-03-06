export interface Values {
  email: string;
}

export interface State {
  email?: string;
  code?: string;
}

export interface Context {
  userRecovery: State;
  setUserRecovery: React.Dispatch<React.SetStateAction<State>>;
}
