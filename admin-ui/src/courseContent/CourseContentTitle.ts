import { CourseContent as TCourseContent } from "../api/courseContent/CourseContent";

export const COURSECONTENT_TITLE_FIELD = "id";

export const CourseContentTitle = (record: TCourseContent): string => {
  return record.id || record.id;
};
