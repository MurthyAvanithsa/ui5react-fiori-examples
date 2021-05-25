import React, { useState } from "react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AgGridReact } from "ag-grid-react";

export const AgGridTable = (props) => {
  const [api, setApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  function onGridReady(params) {
    setApi(params.api);
    setColumnApi(params.columnApi);
    params.api.sizeColumnsToFit();
  }

  const columns = [
    {
      headerName: "A",
      field: "a",
      resizable: true,
    },
    {
      headerName: "B",
      field: "b",
      resizable: true,
    },
  ];

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "80vh",
        width: "100%",
      }}
    >
      <AgGridReact
        rowHeight={50}
        onGridReady={onGridReady}
        columnDefs={columns}
        rowData={[
          { a: "Toyota", b: "Celica" },
          { a: "Ford", b: "Mondeo" },
          { a: "Porsche", b: "Boxter" },
          { a: "Toyota", b: "Celica" },
          { a: "Ford", b: "Mondeo" },
          { a: "Porsche", b: "Boxter" },
          { a: "Toyota", b: "Celica" },
          { a: "Ford", b: "Mondeo" },
          { a: "Porsche", b: "Boxter" },
          { a: "Toyota", b: "Celica" },
          { a: "Ford", b: "Mondeo" },
          { a: "Porsche", b: "Boxter" },
          { a: "Toyota", b: "Celica" },
          { a: "Ford", b: "Mondeo" },
          { a: "Porsche", b: "Boxter" },
        ]}
      />
    </div>
  );
};
