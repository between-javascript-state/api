import { SortOrder } from "../../util/SortOrder";

export type TopicOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
