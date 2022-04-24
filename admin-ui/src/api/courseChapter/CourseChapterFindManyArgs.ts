import { CourseChapterWhereInput } from "./CourseChapterWhereInput";
import { CourseChapterOrderByInput } from "./CourseChapterOrderByInput";

export type CourseChapterFindManyArgs = {
  where?: CourseChapterWhereInput;
  orderBy?: Array<CourseChapterOrderByInput>;
  skip?: number;
  take?: number;
};
