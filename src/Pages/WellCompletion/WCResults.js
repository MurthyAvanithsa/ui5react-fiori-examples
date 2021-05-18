import {
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";

export const WellCompletionTable = () => {
  return (
    <Table
      className=""
      columns={
        <>
          <TableColumn minWidth={20}>
            <Label>WellNumber</Label>
          </TableColumn>
          <TableColumn minWidth={20} popinText="Supplier">
            <Label>WellCompletion</Label>
          </TableColumn>
          <TableColumn minWidth={20} popinText="Dimensions">
            <Label>API WellNumber</Label>
          </TableColumn>
          <TableColumn minWidth={20} popinText="Weight">
            <Label>WellCompletionType</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Country</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>SH Longitude</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>SH Latitude</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>WC XREF1</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>WC XREF2</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Well Class</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>REP Count</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Operated</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Operator</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>WC XREF2</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Company</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Cost Center</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Velocity</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Fluid volume</Label>
          </TableColumn>
          <TableColumn minWidth={20}>
            <Label>Pressure</Label>
          </TableColumn>
        </>
      }
      onLoadMore={function noRefCheck() {}}
      onPopinChange={function noRefCheck() {}}
      onRowClick={function noRefCheck() {}}
      slot=""
      style={{}}
      tooltip=""
    >
      <TableRow>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>

        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>

        <TableCell>
          <Label>Value</Label>
        </TableCell>

        <TableCell>
          <Label>Value</Label>
        </TableCell>

        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
        <TableCell>
          <Label>Value</Label>
        </TableCell>
      </TableRow>
    </Table>
  );
};
