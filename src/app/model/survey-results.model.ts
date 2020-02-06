export interface Submission {
  date: string;
  name: string;
  motivation: string;
}

export interface SurveyResult {
  submissions: Submission[];
}
