import { CourseChapter } from "../courseChapter/CourseChapter";
import { Course } from "../course/Course";

export type CourseContent = {
  chapters?: Array<CourseChapter>;
  course?: Course;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
