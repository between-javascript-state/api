import { Course } from "../course/Course";

export type Topic = {
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  image: string;
  name: string;
  updatedAt: Date;
};
