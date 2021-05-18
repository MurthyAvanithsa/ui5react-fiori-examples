import {
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
} from "@ui5/webcomponents-react";
import React from "react";

export const WellCompletionTable = () => {
  return (
    <div style={{ width: "80vw", overflow: "auto", height: "auto" }}>
      <Table
        className=""
        columns={
          <>
            {/* <TableColumn minWidth={20}>
              <Label>WellNumber</Label>
            </TableColumn> */}
            <TableColumn minWidth={20} popinText="well-completion">
              <Label>Well Completion</Label>
            </TableColumn>
            <TableColumn minWidth={20} popinText="api-well">
              <Label>API Well Number</Label>
            </TableColumn>
            <TableColumn minWidth={20} popinText="api-wc">
              <Label>API WC Number</Label>
            </TableColumn>
            <TableColumn minWidth={20} popinText="wc-type">
              <Label>WC Type</Label>
            </TableColumn>

            <TableColumn minWidth={20}>
              <Label>State</Label>
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
              <Label>BHL Longitude</Label>
            </TableColumn>
            <TableColumn minWidth={20}>
              <Label>BHL Latitude</Label>
            </TableColumn>

            <TableColumn minWidth={20}>
              <Label>WC XREF1</Label>
            </TableColumn>
            <TableColumn minWidth={20}>
              <Label>WC XREF2</Label>
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
          <TableCell>
            <Label>Value</Label>
          </TableCell>
          <TableCell>
            <Label>Value</Label>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
};
