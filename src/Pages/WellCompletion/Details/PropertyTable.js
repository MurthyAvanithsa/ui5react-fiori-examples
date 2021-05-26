import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";
import { Button, Text, Toolbar, ToolbarSpacer } from "@ui5/webcomponents-react";

export const PropertyTable = (props) => {
  const [api, setApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

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
          property: "123",
          doi: "t1001",
          doi_name: "OW",
          state: "YES",
          county: "12",
          doi_xref1: "YES",
          doi_xref2: "100",
          effective_from: "12/09/21",
          effective_to: "11/10/21",
          major_product: "Google",
          primary_doi: "23",
        };
      })
    );
  }

  const columns = [
    {
      headerName: "Property",
      field: "property",
      // resizable: true,
    },
    {
      headerName: "DOI",
      field: "doi",
      resizable: true,
    },
    {
      headerName: "DOI Name",
      field: "doi_name",
      resizable: true,
    },
    {
      headerName: "State",
      field: "state",
      resizable: true,
    },
    {
      headerName: "County",
      field: "county",
      resizable: true,
    },
    {
      headerName: "DOI XRef1",
      field: "doi_xref1",
      resizable: true,
    },
    {
      headerName: "DOI XRef2",
      field: "doi_xref2",
      resizable: true,
    },
    {
      headerName: "Effective From",
      field: "effective_from",
      resizable: true,
    },
    {
      headerName: "Effective To",
      field: "effective_to",
      resizable: true,
    },
    {
      headerName: "Major Product",
      field: "major_product",
      resizable: true,
    },
    {
      headerName: "Primary DOI",
      field: "primary_doi",
      resizable: true,
    },
  ];

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
        <Text>WC To DOI Cross Reference</Text>
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
