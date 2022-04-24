import { Partner as TPartner } from "../api/partner/Partner";

export const PARTNER_TITLE_FIELD = "name";

export const PartnerTitle = (record: TPartner): string => {
  return record.name || record.id;
};
