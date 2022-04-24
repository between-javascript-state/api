import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CourseContentServiceBase } from "./base/courseContent.service.base";

@Injectable()
export class CourseContentService extends CourseContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
