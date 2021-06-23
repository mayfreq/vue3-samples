export interface IQuestion {
  question: string;
  correct_answer: string;
  answers: string[];
}

export const get = async () => {
  const arr = <IQuestion[]>await fetch(
    "https://opentdb.com/api.php?amount=10&category=18"
  )
    .then((response) => response.json())
    .then((data) =>
      data.results.map((question: any) => {
        const que = {
          question: question.question,
          correct_answer: question.correct_answer,
          answers: question.incorrect_answers,
        };
        const num = Math.floor(Math.random() * que.answers.lenght + 2);
        que.answers.splice(num, 0, que.correct_answer);
        for (let i = 0; i < que.answers.length; i++) {
          que.answers[i] = que.answers[i];
        }
        return que;
      })
    );
  return arr;
};
