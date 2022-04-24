import { CourseCreateNestedManyWithoutTopicsInput } from "./CourseCreateNestedManyWithoutTopicsInput";

export type TopicCreateInput = {
  courses?: CourseCreateNestedManyWithoutTopicsInput;
  image: string;
  name: string;
};
