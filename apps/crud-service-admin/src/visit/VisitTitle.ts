import { Visit as TVisit } from "../api/visit/Visit";

export const VISIT_TITLE_FIELD = "idToko";

export const VisitTitle = (record: TVisit): string => {
  return record.idToko?.toString() || String(record.id);
};
