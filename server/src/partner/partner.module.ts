import { Module } from "@nestjs/common";
import { PartnerModuleBase } from "./base/partner.module.base";
import { PartnerService } from "./partner.service";
import { PartnerController } from "./partner.controller";
import { PartnerResolver } from "./partner.resolver";

@Module({
  imports: [PartnerModuleBase],
  controllers: [PartnerController],
  providers: [PartnerService, PartnerResolver],
  exports: [PartnerService],
})
export class PartnerModule {}
