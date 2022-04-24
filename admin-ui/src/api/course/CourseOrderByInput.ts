import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  contentId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  partnerId?: SortOrder;
  updatedAt?: SortOrder;
};
