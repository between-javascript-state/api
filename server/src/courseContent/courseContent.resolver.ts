import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CourseContentResolverBase } from "./base/courseContent.resolver.base";
import { CourseContent } from "./base/CourseContent";
import { CourseContentService } from "./courseContent.service";

@graphql.Resolver(() => CourseContent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseContentResolver extends CourseContentResolverBase {
  constructor(
    protected readonly service: CourseContentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
