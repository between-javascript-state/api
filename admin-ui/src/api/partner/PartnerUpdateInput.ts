import { CourseUpdateManyWithoutPartnersInput } from "./CourseUpdateManyWithoutPartnersInput";

export type PartnerUpdateInput = {
  courses?: CourseUpdateManyWithoutPartnersInput;
  description?: string | null;
  image?: string;
  name?: string;
};
