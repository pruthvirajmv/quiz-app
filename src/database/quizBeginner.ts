import { Quiz, QuestionBank } from "./Quiz.type";

export const quizQuestionsBeginner: QuestionBank[] = [
  {
    question: "The rules for modern badminton were developed in which country during the 19th century?",
    options: [
      { option: "China", isCorrect: false },
      { option: "Britain", isCorrect: true },
      { option: "Denmark", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "In a badminton game, the winner is the first one to reach … points",
    options: [
      { option: "11", isCorrect: false },
      { option: "21", isCorrect: true },
      { option: "17", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "When a badminton player wins a rally, how many points can he or she get?",
    options: [
      { option: "1", isCorrect: true },
      { option: "2", isCorrect: false },
      { option: "3", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "When does the umpire call the score out loud during a badminton game?",
    options: [
      { option: "Before the game starts", isCorrect: false },
      { option: "After the game finishes", isCorrect: false },
      { option: "After the rally finishes", isCorrect: true },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "Which term is used when a player violates the rules?",
    options: [
      { option: "An error", isCorrect: false },
      { option: "A fault", isCorrect: true },
      { option: "A mistake", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "What can be the maximum number of games in a badminton match?",
    options: [
      { option: "3", isCorrect: true },
      { option: "5", isCorrect: false },
      { option: "7", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "When the shuttlecock lands on the line of the court, it is considered to be out or in?",
    options: [
      { option: "In", isCorrect: true },
      { option: "Out", isCorrect: false },
      { option: "Depending on the umpire", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "What do we call a shot that is hit high and deep into the court of the opponent?",
    options: [
      { option: "Drive", isCorrect: false },
      { option: "Drop", isCorrect: false },
      { option: "clear", isCorrect: true },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "Which has the greater length: the court for doubles or the court for singles?",
    options: [
      { option: "Doubles", isCorrect: false },
      { option: "Singles", isCorrect: false },
      { option: "Same Length", isCorrect: true },
    ],
    points: 2,
    negativePoints: 1,
  },
  {
    question: "What is the other name of a shuttlecock in badminton?",
    options: [
      { option: "A ball", isCorrect: false },
      { option: "A birdie", isCorrect: true },
      { option: "A run", isCorrect: false },
    ],
    points: 2,
    negativePoints: 1,
  },
];

export const quizBeginner: Quiz = {
  quizType: "Beginner",
  questions: quizQuestionsBeginner,
  score: 0,
  highScore: [],
};
