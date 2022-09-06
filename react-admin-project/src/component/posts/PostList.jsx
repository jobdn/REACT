import React from "react";
import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const PostList = () => {
  return (
    <List>
      <Datagrid rowClick={"edit"}>
        <TextField source="id" />
        <ReferenceField label="Author" source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
