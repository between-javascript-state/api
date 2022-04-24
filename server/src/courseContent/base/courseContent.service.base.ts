/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, CourseContent, CourseChapter, Course } from "@prisma/client";

export class CourseContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CourseContentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseContentFindManyArgs>
  ): Promise<number> {
    return this.prisma.courseContent.count(args);
  }

  async findMany<T extends Prisma.CourseContentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseContentFindManyArgs>
  ): Promise<CourseContent[]> {
    return this.prisma.courseContent.findMany(args);
  }
  async findOne<T extends Prisma.CourseContentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseContentFindUniqueArgs>
  ): Promise<CourseContent | null> {
    return this.prisma.courseContent.findUnique(args);
  }
  async create<T extends Prisma.CourseContentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseContentCreateArgs>
  ): Promise<CourseContent> {
    return this.prisma.courseContent.create<T>(args);
  }
  async update<T extends Prisma.CourseContentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseContentUpdateArgs>
  ): Promise<CourseContent> {
    return this.prisma.courseContent.update<T>(args);
  }
  async delete<T extends Prisma.CourseContentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseContentDeleteArgs>
  ): Promise<CourseContent> {
    return this.prisma.courseContent.delete(args);
  }

  async findChapters(
    parentId: string,
    args: Prisma.CourseChapterFindManyArgs
  ): Promise<CourseChapter[]> {
    return this.prisma.courseContent
      .findUnique({
        where: { id: parentId },
      })
      .chapters(args);
  }

  async getCourse(parentId: string): Promise<Course | null> {
    return this.prisma.courseContent
      .findUnique({
        where: { id: parentId },
      })
      .course();
  }
}