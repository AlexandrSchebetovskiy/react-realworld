import { Author } from "../Feed/types";

export interface CommentState {
  isLoading: boolean;
  error: string | null;
  comments: Comment[] | null;
}
export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: Author;
}
export interface CommentResponse {
  comments: Comment[];
}
