import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartnerWhereUniqueInput } from "../partner/PartnerWhereUniqueInput";
import { TopicListRelationFilter } from "../topic/TopicListRelationFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  partner?: PartnerWhereUniqueInput;
  topics?: TopicListRelationFilter;
};
