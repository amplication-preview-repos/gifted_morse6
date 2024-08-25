import { Visit } from "../visit/Visit";

export type Sample = {
  createdAt: Date;
  deskripsi: string | null;
  id: string;
  idKunjungan: string | null;
  idSample: number | null;
  namaSample: string | null;
  updatedAt: Date;
  visit?: Visit | null;
};
