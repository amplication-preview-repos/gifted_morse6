import { Sample } from "../sample/Sample";
import { Store } from "../store/Store";
import { User } from "../user/User";

export type Visit = {
  createdAt: Date;
  id: string;
  idKunjungan: number | null;
  idToko: string | null;
  idUser: string | null;
  samples?: Array<Sample>;
  store?: Store | null;
  tanggalKunjungan: Date | null;
  updatedAt: Date;
  user?: User | null;
  waktuMulai: Date | null;
  waktuSelesai: Date | null;
};
