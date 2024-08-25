import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { VISIT_TITLE_FIELD } from "./VisitTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VisitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ID_Kunjungan" source="idKunjungan" />
        <TextField label="ID_Toko" source="idToko" />
        <TextField label="ID_User" source="idUser" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tanggal_Kunjungan" source="tanggalKunjungan" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Waktu_Mulai" source="waktuMulai" />
        <TextField label="Waktu_Selesai" source="waktuSelesai" />
        <ReferenceManyField reference="Sample" target="visitId" label="Samples">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Deskripsi" source="deskripsi" />
            <TextField label="ID" source="id" />
            <TextField label="ID_Kunjungan" source="idKunjungan" />
            <TextField label="ID_Sample" source="idSample" />
            <TextField label="Nama_Sample" source="namaSample" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Visit" source="visit.id" reference="Visit">
              <TextField source={VISIT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
