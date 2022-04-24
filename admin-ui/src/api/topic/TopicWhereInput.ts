import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type TopicWhereInput = {
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
