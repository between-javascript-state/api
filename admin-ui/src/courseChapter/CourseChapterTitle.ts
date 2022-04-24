import { CourseChapter as TCourseChapter } from "../api/courseChapter/CourseChapter";

export const COURSECHAPTER_TITLE_FIELD = "name";

export const CourseChapterTitle = (record: TCourseChapter): string => {
  return record.name || record.id;
};
