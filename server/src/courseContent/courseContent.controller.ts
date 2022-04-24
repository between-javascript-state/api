import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CourseContentService } from "./courseContent.service";
import { CourseContentControllerBase } from "./base/courseContent.controller.base";

@swagger.ApiTags("courseContents")
@common.Controller("courseContents")
export class CourseContentController extends CourseContentControllerBase {
  constructor(
    protected readonly service: CourseContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
