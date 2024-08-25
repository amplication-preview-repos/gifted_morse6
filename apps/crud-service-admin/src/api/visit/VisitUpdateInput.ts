import { SampleUpdateManyWithoutVisitsInput } from "./SampleUpdateManyWithoutVisitsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VisitUpdateInput = {
  idKunjungan?: number | null;
  idToko?: string | null;
  idUser?: string | null;
  samples?: SampleUpdateManyWithoutVisitsInput;
  store?: StoreWhereUniqueInput | null;
  tanggalKunjungan?: Date | null;
  user?: UserWhereUniqueInput | null;
  waktuMulai?: Date | null;
  waktuSelesai?: Date | null;
};
