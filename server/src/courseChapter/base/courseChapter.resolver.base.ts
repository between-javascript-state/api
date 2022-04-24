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
import { CreateCourseChapterArgs } from "./CreateCourseChapterArgs";
import { UpdateCourseChapterArgs } from "./UpdateCourseChapterArgs";
import { DeleteCourseChapterArgs } from "./DeleteCourseChapterArgs";
import { CourseChapterFindManyArgs } from "./CourseChapterFindManyArgs";
import { CourseChapterFindUniqueArgs } from "./CourseChapterFindUniqueArgs";
import { CourseChapter } from "./CourseChapter";
import { CourseContent } from "../../courseContent/base/CourseContent";
import { CourseChapterService } from "../courseChapter.service";

@graphql.Resolver(() => CourseChapter)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseChapterResolverBase {
  constructor(
    protected readonly service: CourseChapterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "read",
    possession: "any",
  })
  async _courseChaptersMeta(
    @graphql.Args() args: CourseChapterFindManyArgs
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

  @graphql.Query(() => [CourseChapter])
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "read",
    possession: "any",
  })
  async courseChapters(
    @graphql.Args() args: CourseChapterFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseChapter[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CourseChapter",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => CourseChapter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "read",
    possession: "own",
  })
  async courseChapter(
    @graphql.Args() args: CourseChapterFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseChapter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CourseChapter",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => CourseChapter)
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "create",
    possession: "any",
  })
  async createCourseChapter(
    @graphql.Args() args: CreateCourseChapterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseChapter> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CourseChapter",
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
        `providing the properties: ${properties} on ${"CourseChapter"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        coursesContents: {
          connect: args.data.coursesContents,
        },
      },
    });
  }

  @graphql.Mutation(() => CourseChapter)
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "update",
    possession: "any",
  })
  async updateCourseChapter(
    @graphql.Args() args: UpdateCourseChapterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseChapter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CourseChapter",
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
        `providing the properties: ${properties} on ${"CourseChapter"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          coursesContents: {
            connect: args.data.coursesContents,
          },
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

  @graphql.Mutation(() => CourseChapter)
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "delete",
    possession: "any",
  })
  async deleteCourseChapter(
    @graphql.Args() args: DeleteCourseChapterArgs
  ): Promise<CourseChapter | null> {
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

  @graphql.ResolveField(() => CourseContent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CourseChapter",
    action: "read",
    possession: "any",
  })
  async coursesContents(
    @graphql.Parent() parent: CourseChapter,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CourseContent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CourseContent",
    });
    const result = await this.service.getCoursesContents(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
