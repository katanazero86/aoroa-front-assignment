export interface User {
  id: number;
  name: string;
}

export interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  user: User | null;
  createdAt: string;
  updatedAt: string;
}

export interface IssueAPI {
  getIssues(status?: string): Promise<Issue[]>;
}

