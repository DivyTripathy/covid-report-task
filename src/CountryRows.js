import React from "react";
import { TableRow, TableCell } from "@mui/material";

const CountryRow = ({ country }) => {
  return (
    <TableRow>
      <TableCell>{country.country}</TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>{country.cases.total}</TableCell>
    </TableRow>
  );
};

export default CountryRow;
