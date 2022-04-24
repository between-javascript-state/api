import { Topic as TTopic } from "../api/topic/Topic";

export const TOPIC_TITLE_FIELD = "name";

export const TopicTitle = (record: TTopic): string => {
  return record.name || record.id;
};
