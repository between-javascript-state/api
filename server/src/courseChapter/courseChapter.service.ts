import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CourseChapterServiceBase } from "./base/courseChapter.service.base";

@Injectable()
export class CourseChapterService extends CourseChapterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
