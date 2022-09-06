import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceField,
  SelectField,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

export const PostCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput label="Autor" optionText="name" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Create>
  );
};
