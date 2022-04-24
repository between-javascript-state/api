import { CourseUpdateManyWithoutTopicsInput } from "./CourseUpdateManyWithoutTopicsInput";

export type TopicUpdateInput = {
  courses?: CourseUpdateManyWithoutTopicsInput;
  image?: string;
  name?: string;
};
