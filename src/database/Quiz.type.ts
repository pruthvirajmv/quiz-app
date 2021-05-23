export type Option = {
  option: string;
  isCorrect: boolean;
  isSelected?: boolean;
};

export type QuestionBank = {
  question: string;
  options: Option[];
  points: number;
  negativePoints: number;
};

export type LeaderBoard = {
  userId: string;
  score: number;
};

export type UserHighScore = {
  attempt: number;
  score: number;
};

export type Quiz = {
  quizType: string;
  questions: QuestionBank[];
  score: number;
  highScore?: UserHighScore[];
  leaderBoard?: LeaderBoard[];
};
