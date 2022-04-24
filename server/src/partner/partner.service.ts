import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PartnerServiceBase } from "./base/partner.service.base";

@Injectable()
export class PartnerService extends PartnerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
