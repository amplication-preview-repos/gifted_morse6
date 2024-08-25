import { Sample as TSample } from "../api/sample/Sample";

export const SAMPLE_TITLE_FIELD = "idKunjungan";

export const SampleTitle = (record: TSample): string => {
  return record.idKunjungan?.toString() || String(record.id);
};
