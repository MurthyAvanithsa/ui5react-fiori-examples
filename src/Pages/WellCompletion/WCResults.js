import {
  Button,
  Icon,
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Text,
  Toolbar,
  ToolbarSpacer,
} from "@ui5/webcomponents-react";
import React from "react";

export const WellCompletionTable = () => {
  return (
    <div>
      <Toolbar
        className=""
        onClick={function noRefCheck() {}}
        slot=""
        style={{}}
        tooltip=""
      >
        <Text>Well Completion Table</Text>
        <ToolbarSpacer />
        <Button>Open(2)</Button>
        <Icon name="settings" />
        <Icon name="download" />
      </Toolbar>
      <div
        style={{
          width: "100%",
          overflow: "auto",
          height: "auto",
        }}
      >
        <Table
          className=""
          columns={
            <>
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
                <Label>County</Label>
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
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1009</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1091</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Linear</Label>
            </TableCell>

            <TableCell>
              <Label>CA</Label>
            </TableCell>
            <TableCell>
              <Label>Del Norte County</Label>
            </TableCell>

            <TableCell>
              <Label>-88.657998</Label>
            </TableCell>
            <TableCell>
              <Label>23.357998</Label>
            </TableCell>
            <TableCell>
              <Label>-69.359998</Label>
            </TableCell>
            <TableCell>
              <Label>30.359998</Label>
            </TableCell>

            <TableCell>
              <Label>Enbridge</Label>
            </TableCell>
            <TableCell>
              <Label>Energy Transfer</Label>
            </TableCell>

            <TableCell>
              <Label>V100020</Label>
            </TableCell>
            <TableCell>
              <Label>10</Label>
            </TableCell>
            <TableCell>
              <Label>30</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1010</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1010</Label>
            </TableCell>
            <TableCell>
              <Label>A7</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AZ</Label>
            </TableCell>
            <TableCell>
              <Label>La Paz County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100024</Label>
            </TableCell>
            <TableCell>
              <Label>110</Label>
            </TableCell>
            <TableCell>
              <Label>130</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1013</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A9</Label>
            </TableCell>
            <TableCell>
              <Label>Open Hole</Label>
            </TableCell>

            <TableCell>
              <Label>CO</Label>
            </TableCell>
            <TableCell>
              <Label>Conjoes County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359978</Label>
            </TableCell>
            <TableCell>
              <Label>33.359398</Label>
            </TableCell>
            <TableCell>
              <Label>-89.352998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359918</Label>
            </TableCell>

            <TableCell>
              <Label>ONEOK</Label>
            </TableCell>
            <TableCell>
              <Label>American Pipeline</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>20</Label>
            </TableCell>
            <TableCell>
              <Label>35</Label>
            </TableCell>
            <TableCell>
              <Label>85</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Label>WL1001</Label>
            </TableCell>
            <TableCell>
              <Label>AWL1001</Label>
            </TableCell>
            <TableCell>
              <Label>A5</Label>
            </TableCell>
            <TableCell>
              <Label>Perforated Casing</Label>
            </TableCell>

            <TableCell>
              <Label>AK</Label>
            </TableCell>
            <TableCell>
              <Label>Calhoun County</Label>
            </TableCell>

            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>
            <TableCell>
              <Label>-89.359998</Label>
            </TableCell>
            <TableCell>
              <Label>33.359998</Label>
            </TableCell>

            <TableCell>
              <Label>TC Energy</Label>
            </TableCell>
            <TableCell>
              <Label>Williams Companies</Label>
            </TableCell>

            <TableCell>
              <Label>V100027</Label>
            </TableCell>
            <TableCell>
              <Label>100</Label>
            </TableCell>
            <TableCell>
              <Label>300</Label>
            </TableCell>
            <TableCell>
              <Label>45</Label>
            </TableCell>
          </TableRow>
        </Table>
      </div>
    </div>
  );
};
