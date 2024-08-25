import { VisitWhereUniqueInput } from "../visit/VisitWhereUniqueInput";

export type SampleUpdateInput = {
  deskripsi?: string | null;
  idKunjungan?: string | null;
  idSample?: number | null;
  namaSample?: string | null;
  visit?: VisitWhereUniqueInput | null;
};
