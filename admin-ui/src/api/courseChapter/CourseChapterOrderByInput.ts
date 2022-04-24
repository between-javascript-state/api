import { SortOrder } from "../../util/SortOrder";

export type CourseChapterOrderByInput = {
  coursesContentsId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
