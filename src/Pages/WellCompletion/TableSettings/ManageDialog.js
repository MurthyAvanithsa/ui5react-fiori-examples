import {
  Button,
  Dialog,
  FlexBox,
  Label,
  Input,
  Bar,
  Title,
  Icon,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  RadioButton,
} from "@ui5/webcomponents-react";
import ReactDOM from "react-dom";
import { spacing } from "@ui5/webcomponents-react-base";
import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters";

export const ManageDialog = (props) => {
  const handleManageClose = () => {
    props.manageRef.current.close();
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Dialog
          style={{ zIndex: 9999 }}
          ref={props.manageRef}
          footer={
            <Bar
              endContent={
                <>
                  <Button onClick={handleManageClose} design="Emphasized">
                    Save
                  </Button>
                  <Button onClick={handleManageClose} design="Transparent">
                    Cancel
                  </Button>
                </>
              }
            />
          }
          header={<Bar startContent={<Title level="H5">Manage Views</Title>} />}
          headerText="Manage Views"
        >
          <FlexBox direction="Column" style={spacing.sapUiTinyPaddingBeginEnd}>
            <Input
              placeholder="Search"
              icon={<Icon name="search" />}
              style={{ width: "100%", marginBottom: "8px" }}
            />
            <Table
              className=""
              columns={
                <>
                  <TableColumn></TableColumn>
                  <TableColumn style={{ width: "12rem" }}>
                    <Label>View</Label>
                  </TableColumn>
                  <TableColumn minWidth={800} popinText="Supplier">
                    <Label>Sharing</Label>
                  </TableColumn>
                  <TableColumn
                    demandPopin
                    minWidth={600}
                    popinText="Dimensions"
                  >
                    <Label>Default</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={600} popinText="Weight">
                    <Label>Created By</Label>
                  </TableColumn>
                  <TableColumn></TableColumn>
                </>
              }
              style={{ width: "900px" }}
            >
              <TableRow>
                <TableCell>
                  <Icon
                    name="favorite"
                    style={{ color: ThemingParameters.sapButton_TextColor }}
                  />
                </TableCell>
                <TableCell>
                  <Label>Standard</Label>
                </TableCell>
                <TableCell>
                  <Label>Public</Label>
                </TableCell>
                <TableCell>
                  <RadioButton selected style={{ height: "24px" }} />
                </TableCell>
                <TableCell>
                  <Label>SAP</Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Icon
                    name="favorite"
                    style={{ color: ThemingParameters.sapButton_TextColor }}
                  />
                </TableCell>
                <TableCell>
                  <Label>
                    <Input />
                  </Label>
                </TableCell>
                <TableCell>
                  <Label>Private</Label>
                </TableCell>
                <TableCell>
                  <RadioButton style={{ height: "24px" }} />
                </TableCell>
                <TableCell>
                  <Label>Crawford</Label>
                </TableCell>
                <TableCell>
                  <Button icon="decline" design="Transparent" />
                  {/* <Icon
                    name="decline"
                    style={{ color: ThemingParameters.sapButton_TextColor }}
                  /> */}
                </TableCell>
              </TableRow>
            </Table>
          </FlexBox>
        </Dialog>,
        document.body
      )}
    </>
  );
};
