import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { Button, Text, Toolbar, ToolbarSpacer } from "@ui5/webcomponents-react";

export const AgGridTable = (props) => {
  const [api, setApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const columns = [
    {
      headerName: "Effective From",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      field: "effective_from",
      // resizable: true,
    },
    {
      headerName: "Effective To",
      field: "effective_to",
      resizable: true,
    },
    {
      headerName: "Well Class",
      field: "well_class",
      resizable: true,
    },
    {
      headerName: "Well Status",
      field: "well_status",
      resizable: true,
    },
    {
      headerName: "Rep Well Count",
      field: "rep_well_count",
      resizable: true,
    },
    {
      headerName: "Operated",
      field: "operated",
      resizable: true,
    },
    {
      headerName: "Operator",
      field: "operator",
      resizable: true,
    },
    {
      headerName: "Operator Name",
      field: "operator_name",
      resizable: true,
    },
    {
      headerName: "Company",
      field: "company",
      resizable: true,
    },
    {
      headerName: "Company Name",
      field: "company_name",
      resizable: true,
    },
    {
      headerName: "Cost Center",
      field: "cost_center",
      resizable: true,
    },
    {
      headerName: "Cost Center Name",
      field: "cost_center_name",
      resizable: true,
    },
    {
      headerName: "Viscocity",
      field: "viscocity",
      resizable: true,
    },
    {
      headerName: "Isothermal compressibility",
      field: "isothermal",
      resizable: true,
    },
  ];

  function onGridReady(params) {
    setApi(params.api);
    setColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
    var allColumnIds = [];
    columnApi?.getAllColumns().forEach(function (column) {
      allColumnIds.push(column.colId);
    });
    // columnApi?.autoSizeColumns(allColumnIds, true);
    setRowData(
      [...Array(100).keys()].map((value) => {
        return {
          effective_from: "12/12/2020",
          effective_to: "01/11/2021",
          well_class: "OW",
          well_status: "YES",
          rep_well_count: "12",
          operated: "YES",
          operator: "100",
          operator_name: "AND",
          company: "t101",
          company_name: "Google",
          cost_center: "23",
          cost_center_name: "silicon",
          viscocity: "567",
          isothermal: "123",
        };
      })
    );
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "100%",
        width: "100%",
        // paddingTop:
      }}
    >
      <Toolbar style={{ padding: "24px" }}>
        <Text>Dated Charactersitcs</Text>
        <ToolbarSpacer />
        <Button key="add">Create</Button>
        <Button key="delete" design="Transparent">
          Delete
        </Button>
      </Toolbar>
      <AgGridReact
        // rowHeight={50}
        onGridReady={onGridReady}
        columnDefs={columns}
        rowData={rowData}
      />
    </div>
  );
};
