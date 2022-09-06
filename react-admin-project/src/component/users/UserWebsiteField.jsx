import React from "react";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export const UserWebsiteField = ({ source }) => {
  const record = useRecordContext();

  return record ? (
    <Link
      href={record[source]}
      sx={{ textDecoration: "none", color: "green", display: "flex" }}
    >
      {record[source]}
      <LaunchIcon
        sx={{ width: "0.5em", heigth: "0.5em", paddingLeft: "10px" }}
      />
    </Link>
  ) : null;
};
