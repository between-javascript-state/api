import { TopicWhereUniqueInput } from "./TopicWhereUniqueInput";
import { TopicUpdateInput } from "./TopicUpdateInput";

export type UpdateTopicArgs = {
  where: TopicWhereUniqueInput;
  data: TopicUpdateInput;
};
