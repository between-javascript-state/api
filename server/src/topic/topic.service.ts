import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TopicServiceBase } from "./base/topic.service.base";

@Injectable()
export class TopicService extends TopicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
