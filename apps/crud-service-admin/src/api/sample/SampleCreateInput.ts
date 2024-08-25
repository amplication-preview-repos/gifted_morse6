import { VisitWhereUniqueInput } from "../visit/VisitWhereUniqueInput";

export type SampleCreateInput = {
  deskripsi?: string | null;
  idKunjungan?: string | null;
  idSample?: number | null;
  namaSample?: string | null;
  visit?: VisitWhereUniqueInput | null;
};
