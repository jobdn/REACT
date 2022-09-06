import React from "react";
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const PostEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput label="Author" optionText="name" />
        </ReferenceInput>
        <TextInput source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};
