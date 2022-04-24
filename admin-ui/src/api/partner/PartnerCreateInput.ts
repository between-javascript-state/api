import { CourseCreateNestedManyWithoutPartnersInput } from "./CourseCreateNestedManyWithoutPartnersInput";

export type PartnerCreateInput = {
  courses?: CourseCreateNestedManyWithoutPartnersInput;
  description?: string | null;
  image: string;
  name: string;
};
