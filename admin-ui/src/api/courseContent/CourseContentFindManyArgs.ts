import { CourseContentWhereInput } from "./CourseContentWhereInput";
import { CourseContentOrderByInput } from "./CourseContentOrderByInput";

export type CourseContentFindManyArgs = {
  where?: CourseContentWhereInput;
  orderBy?: Array<CourseContentOrderByInput>;
  skip?: number;
  take?: number;
};
