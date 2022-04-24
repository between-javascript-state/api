import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartnerService } from "./partner.service";
import { PartnerControllerBase } from "./base/partner.controller.base";

@swagger.ApiTags("partners")
@common.Controller("partners")
export class PartnerController extends PartnerControllerBase {
  constructor(
    protected readonly service: PartnerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
