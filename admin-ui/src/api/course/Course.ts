import { CourseContent } from "../courseContent/CourseContent";
import { Partner } from "../partner/Partner";
import { Topic } from "../topic/Topic";

export type Course = {
  content?: CourseContent;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string;
  name: string;
  partner?: Partner;
  topics?: Array<Topic>;
  updatedAt: Date;
};
