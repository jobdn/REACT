import React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";
import { UserWebsiteField } from "./UserWebsiteField";

export const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <UserWebsiteField source="website" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
