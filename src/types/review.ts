export type ReviewUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Review = {
  id: string;
  user: ReviewUser;
  rating: number;
  comment: string;
  date: string;
};
