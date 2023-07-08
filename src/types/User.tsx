interface UserState {
  user: {
    displayName: string | null | undefined;
    email: string | null | undefined;
    uid: string | null | undefined;
    savedArticles: Article[] | null | undefined;
  } | null;
}