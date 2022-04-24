import { CourseContentWhereUniqueInput } from "../courseContent/CourseContentWhereUniqueInput";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { TopicUpdateManyWithoutCoursesInput } from "./TopicUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  content?: CourseContentWhereUniqueInput;
  description?: string | null;
  image?: string;
  name?: string;
  partner?: PartnerWhereUniqueInput;
  topics?: TopicUpdateManyWithoutCoursesInput;
};
