import { CourseContent } from "../courseContent/CourseContent";

export type CourseChapter = {
  coursesContents?: CourseContent;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  text: string;
  updatedAt: Date;
};
