/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CourseChapterWhereInput } from "./CourseChapterWhereInput";
import { Type } from "class-transformer";
import { CourseChapterOrderByInput } from "./CourseChapterOrderByInput";

@ArgsType()
class CourseChapterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CourseChapterWhereInput,
  })
  @Field(() => CourseChapterWhereInput, { nullable: true })
  @Type(() => CourseChapterWhereInput)
  where?: CourseChapterWhereInput;

  @ApiProperty({
    required: false,
    type: [CourseChapterOrderByInput],
  })
  @Field(() => [CourseChapterOrderByInput], { nullable: true })
  @Type(() => CourseChapterOrderByInput)
  orderBy?: Array<CourseChapterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CourseChapterFindManyArgs };
