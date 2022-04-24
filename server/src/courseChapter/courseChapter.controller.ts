import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CourseChapterService } from "./courseChapter.service";
import { CourseChapterControllerBase } from "./base/courseChapter.controller.base";

@swagger.ApiTags("courseChapters")
@common.Controller("courseChapters")
export class CourseChapterController extends CourseChapterControllerBase {
  constructor(
    protected readonly service: CourseChapterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
