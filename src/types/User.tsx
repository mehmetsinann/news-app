interface UserState {
  user: {
    displayName: string | null | undefined;
    email: string | null | undefined;
    uid: string | null | undefined;
  } | null;
}