import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type CourseContentWhereInput = {
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
};
