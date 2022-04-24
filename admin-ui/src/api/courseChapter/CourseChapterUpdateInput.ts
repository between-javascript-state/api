import { CourseContentWhereUniqueInput } from "../courseContent/CourseContentWhereUniqueInput";

export type CourseChapterUpdateInput = {
  coursesContents?: CourseContentWhereUniqueInput;
  description?: string | null;
  name?: string;
  text?: string;
};
