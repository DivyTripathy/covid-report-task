import React from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
  Table,
} from "@mui/material";
import CountryRow from "./CountryRows";

const CountryDetails = ({ countries }) => {
  if (countries.length === 0) {
    return <Typography>No countries found.</Typography>;
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Total Cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <CountryRow key={country.country} country={country} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CountryDetails;
