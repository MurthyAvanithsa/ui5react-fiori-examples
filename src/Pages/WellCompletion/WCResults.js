import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import {
  Button,
  Toolbar,
  ToolbarSpacer,
  Title,
  ToolbarSeparator,
  Popover,
  Bar,
  List,
  StandardListItem,
} from "@ui5/webcomponents-react";
import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters";
import { SettingsDialog } from "../WellCompletion/TableSettings";
import { SaveAsDialog } from "./TableSettings/SaveAsDialog";
import { ManageDialog } from "./TableSettings/ManageDialog";
import { useHistory } from "react-router-dom";
const styles = {
  title: {
    color: ThemingParameters.sapButton_TextColor,
    cursor: "pointer",
  },
};

const useStyles = createUseStyles(styles, { name: "WellCompletionTable" });

export const WellCompletionTable = (props) => {
  const [api, setApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const dialogSettingsRef = useRef(null);
  const popoverRef = useRef();
  const saveAsRef = useRef();
  const manageRef = useRef();
  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    if (columnApi !== null) {
      var allColumnIds = [];
      columnApi.getAllColumns().forEach(function (column) {
        allColumnIds.push(column.colId);
      });
      columnApi.autoSizeColumns(allColumnIds, false);
      // api.sizeColumnsToFit();
    }
  }, [columnApi, api]);

  function onGridReady(params) {
    setApi(params.api);
    setColumnApi(params.columnApi);
    // api?.sizeColumnsToFit();
    setRowData(
      [...Array(100).keys()].map((value) => {
        return {
          well_number: `WELL${value + 1000}`,
          well_completion: "t1001",
          api_well_number: "OW",
          api_wc_number: "YES",
          wc_type: "12",
          county: "YES",
          wc_xref1: "100",
          wc_xref2: "12/09/21",
          well_class: "11/10/21",
          rep_well_count: "Google",
          Operated: "23",
          shl_longitude: "10012.21",
          shl_latitude: "10012.21",
          operator: "Oildex",
          company: "C10001",
          company_name: "NewYork",
          cost_center: "CT1001",
          velocity: "122.1",
          fluid_volume: "144.1",
          isothermal: "12.12",
          viscocity: "2.7",
          pressure: "2223",
        };
      })
    );
  }

  const columns = [
    {
      headerName: "Well Number",
      headerCheckboxSelection: true,
      checkboxSelection: true,
      field: "well_number",
      resizable: true,
    },
    {
      headerName: "Well Completion",
      field: "well_completion",
      resizable: true,
    },
    {
      headerName: "API WellNo",
      field: "api_well_number",
      resizable: true,
    },
    {
      headerName: "API WC No",
      field: "api_wc_number",
      resizable: true,
    },
    {
      headerName: "WC Type",
      field: "wc_type",
      resizable: true,
    },
    {
      headerName: "County",
      field: "county",
      resizable: true,
    },
    {
      headerName: "SHL Longitude",
      field: "shl_longitude",
      resizable: true,
    },
    {
      headerName: "SHL Latitude",
      field: "shl_latitude",
      resizable: true,
    },
    {
      headerName: "WC XRef1",
      field: "wc_xref1",
      resizable: true,
    },
    {
      headerName: "WC XRef2",
      field: "wc_xref2",
      resizable: true,
    },
    {
      headerName: "Well Class",
      field: "well_class",
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
      headerName: "Viscocity",
      field: "viscocity",
      resizable: true,
    },
    {
      headerName: "Isothermal compressibility",
      field: "isothermal",
      resizable: true,
    },
    {
      headerName: "Velocity",
      field: "velocity",
      resizable: true,
    },
    {
      headerName: "Fluid volume",
      field: "fluid_volume",
      resizable: true,
    },
    {
      headerName: "Pressure",
      field: "pressure",
      resizable: true,
    },
  ];

  const handleSettings = () => {
    dialogSettingsRef.current.open();
  };

  const onSaveAsClick = () => {
    popoverRef.current.close();
    saveAsRef.current.open();
  };

  const onManageClick = () => {
    popoverRef.current.close();
    manageRef.current.open();
  };

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "100%",
        width: "100%",
        paddingLeft: "10px",
      }}
    >
      <Toolbar style={{ paddingTop: "28px", paddingBottom: "28px" }}>
        <Title level="H4">Items (54)</Title>
        <ToolbarSeparator />
        <>
          <Title level="H4" className={classes.title}>
            Standard
          </Title>
          <Button
            onClick={function onButtonClick(e) {
              popoverRef.current.openBy(e.target);
            }}
            design="Transparent"
            icon="navigation-down-arrow"
            style={{ marginLeft: "-8px" }}
          />
          <Popover
            ref={popoverRef}
            placementType="Bottom"
            footer={
              <Bar
                endContent={
                  <>
                    <Button onClick={onSaveAsClick} design="Emphasized">
                      Save As
                    </Button>
                    <SaveAsDialog saveAsRef={saveAsRef} />
                    <Button onClick={onManageClick}>Manage</Button>
                    <ManageDialog manageRef={manageRef} />
                  </>
                }
              />
            }
            header={<Bar startContent={<Title level="H6">My Views</Title>} />}
            headerText="My Views"
          >
            <div style={{ width: "400px", height: "300px", maxWidth: "954px" }}>
              <List>
                <StandardListItem>Standard</StandardListItem>
                <StandardListItem>Layout 1</StandardListItem>
                <StandardListItem>Layout 2</StandardListItem>
              </List>
            </div>
          </Popover>
        </>
        <ToolbarSpacer />
        <Button
          key="add"
          onClick={() => {
            history.push("/well-completion/details");
          }}
        >
          Open(2)
        </Button>
        <Button
          key="settings"
          design="Transparent"
          icon="action-settings"
          onClick={handleSettings}
        />
      </Toolbar>
      <AgGridReact
        // editType={"fullRow"}
        onGridReady={onGridReady}
        columnDefs={columns}
        rowData={rowData}
      />
      <SettingsDialog dialogSettingsRef={dialogSettingsRef} />
    </div>
  );
};
