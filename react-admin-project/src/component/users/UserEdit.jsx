import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
      </SimpleForm>
    </Edit>
  );
};
