import { Module } from "@nestjs/common";
import { CourseChapterModuleBase } from "./base/courseChapter.module.base";
import { CourseChapterService } from "./courseChapter.service";
import { CourseChapterController } from "./courseChapter.controller";
import { CourseChapterResolver } from "./courseChapter.resolver";

@Module({
  imports: [CourseChapterModuleBase],
  controllers: [CourseChapterController],
  providers: [CourseChapterService, CourseChapterResolver],
  exports: [CourseChapterService],
})
export class CourseChapterModule {}
