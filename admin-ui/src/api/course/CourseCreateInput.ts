import { CourseContentWhereUniqueInput } from "../courseContent/CourseContentWhereUniqueInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { TopicCreateNestedManyWithoutCoursesInput } from "./TopicCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  content: CourseContentWhereUniqueInput;
  description?: string | null;
  image: string;
  name: string;
  partner: PartnerWhereUniqueInput;
  topics?: TopicCreateNestedManyWithoutCoursesInput;
};
