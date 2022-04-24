import { Course } from "../course/Course";

export type Partner = {
  courses?: Array<Course>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string;
  name: string;
  updatedAt: Date;
};
