export interface Store {
  user: string;
  profile: {
    username?: string;
    picture?: string;
    description?: string;
  };
}
