export interface UserCard {
  name: string;
  num: Number;
  pollresultReady: boolean;
}

export interface EndSessionInput {
  end: boolean;
  session: string;
}
export interface BeginSessionInput {
  begin: boolean;
  session: string;
}

export interface UserCardResult {
  cards: UserCard[];
}
