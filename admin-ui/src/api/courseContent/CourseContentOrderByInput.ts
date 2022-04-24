import { SortOrder } from "../../util/SortOrder";

export type CourseContentOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
