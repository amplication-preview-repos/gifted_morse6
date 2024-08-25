import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="ID_User" source="idUser" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Nama_User" source="namaUser" />
        <TextField label="Role" source="role" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Transaction"
          target="userId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="ID_Toko" source="idToko" />
            <TextField label="ID_Transaksi" source="idTransaksi" />
            <TextField label="ID_User" source="idUser" />
            <TextField label="Status_Order" source="statusOrder" />
            <ReferenceField label="Store" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tanggal_Transaksi" source="tanggalTransaksi" />
            <TextField label="Tipe_Pembayaran" source="tipePembayaran" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Visit" target="userId" label="Visits">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};