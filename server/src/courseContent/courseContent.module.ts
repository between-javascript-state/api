import { Module } from "@nestjs/common";
import { CourseContentModuleBase } from "./base/courseContent.module.base";
import { CourseContentService } from "./courseContent.service";
import { CourseContentController } from "./courseContent.controller";
import { CourseContentResolver } from "./courseContent.resolver";

@Module({
  imports: [CourseContentModuleBase],
  controllers: [CourseContentController],
  providers: [CourseContentService, CourseContentResolver],
  exports: [CourseContentService],
})
export class CourseContentModule {}
