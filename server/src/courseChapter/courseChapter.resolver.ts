import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CourseChapterResolverBase } from "./base/courseChapter.resolver.base";
import { CourseChapter } from "./base/CourseChapter";
import { CourseChapterService } from "./courseChapter.service";

@graphql.Resolver(() => CourseChapter)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseChapterResolver extends CourseChapterResolverBase {
  constructor(
    protected readonly service: CourseChapterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
