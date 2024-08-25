import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { StoreTitle } from "../store/StoreTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ID_Toko" source="idToko" />
        <NumberInput step={1} label="ID_Transaksi" source="idTransaksi" />
        <TextInput label="ID_User" source="idUser" />
        <TextInput label="Status_Order" source="statusOrder" />
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <DateTimeInput label="Tanggal_Transaksi" source="tanggalTransaksi" />
        <TextInput label="Tipe_Pembayaran" source="tipePembayaran" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
