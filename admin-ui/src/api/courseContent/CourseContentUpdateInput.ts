import { CourseChapterUpdateManyWithoutCourseContentsInput } from "./CourseChapterUpdateManyWithoutCourseContentsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type CourseContentUpdateInput = {
  chapters?: CourseChapterUpdateManyWithoutCourseContentsInput;
  course?: CourseWhereUniqueInput;
};
