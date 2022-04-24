/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateCourseContentArgs } from "./CreateCourseContentArgs";
import { UpdateCourseContentArgs } from "./UpdateCourseContentArgs";
import { DeleteCourseContentArgs } from "./DeleteCourseContentArgs";
import { CourseContentFindManyArgs } from "./CourseContentFindManyArgs";
import { CourseContentFindUniqueArgs } from "./CourseContentFindUniqueArgs";
import { CourseContent } from "./CourseContent";
import { CourseChapterFindManyArgs } from "../../courseChapter/base/CourseChapterFindManyArgs";
import { CourseChapter } from "../../courseChapter/base/CourseChapter";
import { Course } from "../../course/base/Course";
import { CourseContentService } from "../courseContent.service";

@graphql.Resolver(() => CourseContent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseContentResolverBase {
  constructor(
    protected readonly service: CourseContentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "read",
    possession: "any",
  })
  async _courseContentsMeta(
    @graphql.Args() args: CourseContentFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [CourseContent])
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "read",
    possession: "any",
  })
  async courseContents(
    @graphql.Args() args: CourseContentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseContent[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CourseContent",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => CourseContent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "read",
    possession: "own",
  })
  async courseContent(
    @graphql.Args() args: CourseContentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseContent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CourseContent",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => CourseContent)
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "create",
    possession: "any",
  })
  async createCourseContent(
    @graphql.Args() args: CreateCourseContentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseContent> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CourseContent",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CourseContent"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        course: args.data.course
          ? {
              connect: args.data.course,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => CourseContent)
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "update",
    possession: "any",
  })
  async updateCourseContent(
    @graphql.Args() args: UpdateCourseContentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseContent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CourseContent",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CourseContent"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          course: args.data.course
            ? {
                connect: args.data.course,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CourseContent)
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "delete",
    possession: "any",
  })
  async deleteCourseContent(
    @graphql.Args() args: DeleteCourseContentArgs
  ): Promise<CourseContent | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CourseChapter])
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "read",
    possession: "any",
  })
  async chapters(
    @graphql.Parent() parent: CourseContent,
    @graphql.Args() args: CourseChapterFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseChapter[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CourseChapter",
    });
    const results = await this.service.findChapters(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Course, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseContent",
    action: "read",
    possession: "any",
  })
  async course(
    @graphql.Parent() parent: CourseContent,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Course | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Course",
    });
    const result = await this.service.getCourse(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
