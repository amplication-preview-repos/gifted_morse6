import { SampleCreateNestedManyWithoutVisitsInput } from "./SampleCreateNestedManyWithoutVisitsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VisitCreateInput = {
  idKunjungan?: number | null;
  idToko?: string | null;
  idUser?: string | null;
  samples?: SampleCreateNestedManyWithoutVisitsInput;
  store?: StoreWhereUniqueInput | null;
  tanggalKunjungan?: Date | null;
  user?: UserWhereUniqueInput | null;
  waktuMulai?: Date | null;
  waktuSelesai?: Date | null;
};
