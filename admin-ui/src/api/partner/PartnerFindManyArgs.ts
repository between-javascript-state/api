import { PartnerWhereInput } from "./PartnerWhereInput";
import { PartnerOrderByInput } from "./PartnerOrderByInput";

export type PartnerFindManyArgs = {
  where?: PartnerWhereInput;
  orderBy?: Array<PartnerOrderByInput>;
  skip?: number;
  take?: number;
};
