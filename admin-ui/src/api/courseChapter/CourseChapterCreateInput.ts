import { CourseContentWhereUniqueInput } from "../courseContent/CourseContentWhereUniqueInput";

export type CourseChapterCreateInput = {
  coursesContents: CourseContentWhereUniqueInput;
  description?: string | null;
  name: string;
  text: string;
};
