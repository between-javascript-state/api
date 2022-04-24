import { CourseChapterCreateNestedManyWithoutCourseContentsInput } from "./CourseChapterCreateNestedManyWithoutCourseContentsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type CourseContentCreateInput = {
  chapters?: CourseChapterCreateNestedManyWithoutCourseContentsInput;
  course?: CourseWhereUniqueInput;
};
