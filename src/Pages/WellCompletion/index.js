import React, { useRef } from "react";
import {
  FlexBox,
  DynamicPage,
  Label,
  DynamicPageHeader,
  DynamicPageTitle,
  Button,
  Title,
  Form,
  FormItem,
  Input,
  Icon,
  Table,
  TableColumn,
  TableRow,
  TableCell,
  VariantManagement,
  Dialog,
  Bar,
  TabContainer,
  Tab,
  CheckBox,
  FilterBar,
  FilterGroupItem,
  MultiComboBox,
  MultiComboBoxItem,
} from "@ui5/webcomponents-react";

export const WellCompletion = () => {
  const dialogRef = useRef();
  const handleOpen = (e) => {
    dialogRef.current.open();
  };
  const handleClose = () => {
    dialogRef.current.close();
  };
  return (
    <FlexBox
      style={{ width: "100%", height: "100vh" }}
      // direction={FlexBoxDirection.Column}
      // justifyContent={FlexBoxJustifyContent.Center}
    >
      <DynamicPage
        header={
          <DynamicPageHeader>
            <Form>
              <div>
                <FormItem label="Layout">
                  <Input icon={<Icon name="search" />} />
                </FormItem>
              </div>
              <div>
                <FormItem label="Well Number">
                  <Input
                    icon={<Icon name="value-help" onClick={handleOpen} />}
                  />
                </FormItem>
              </div>
              <div>
                <FormItem label="Well Completion">
                  <Input icon={<Icon name="value-help" />} />
                </FormItem>
              </div>
              <div>
                <FormItem label="WC Name">
                  <Input icon={<Icon name="value-help" />} />
                </FormItem>
              </div>
              <div>
                <FormItem label="Selection Date">
                  <Input icon={<Icon name="appointment" />} />
                </FormItem>
              </div>
            </Form>
          </DynamicPageHeader>
        }
        style={{
          maxHeight: "700px",
        }}
        title={
          <DynamicPageTitle
            actions={[
              <Button key="add" design="Transparent" icon="add" />,
              <Button key="copy" design="Transparent" icon="copy" />,
              <Button key="edit" design="Emphasized">
                Edit
              </Button>,
              <Button key="delete" design="Transparent">
                Delete
              </Button>,
            ]}
            // breadcrumbs={
            //   <Breadcrumbs>
            //     <Link>Home</Link>
            //     <Link>Page 1</Link>
            //     <Link>Page 2</Link>
            //     <Link>Page 3</Link>
            //     <Link>Page 4</Link>
            //     <Link>Page 5</Link>
            //   </Breadcrumbs>
            // }
            heading={
              <VariantManagement
                onSelect={function noRefCheck() {}}
                selectedKey="1"
                variantItems={[
                  { key: "1", label: "Standard" },
                  { key: "2", label: "Advanced" },
                ]}
              />
            }
            navigationActions={[
              <Button key="decline" design="Transparent" icon="decline" />,
            ]}
            // subHeading={<Label>This is a subheading</Label>}
          >
            {/* <Badge>Status: OK</Badge> */}
          </DynamicPageTitle>
        }
      >
        <Table
          className=""
          columns={
            <>
              <TableColumn style={{ width: "12rem" }}>
                <Label>Product</Label>
              </TableColumn>
              <TableColumn minWidth={800} popinText="Supplier">
                <Label>Supplier</Label>
              </TableColumn>
              <TableColumn demandPopin minWidth={600} popinText="Dimensions">
                <Label>Dimensions</Label>
              </TableColumn>
              <TableColumn demandPopin minWidth={600} popinText="Weight">
                <Label>Weight</Label>
              </TableColumn>
              <TableColumn>
                <Label>Price</Label>
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
              <Label>Notebook Basic</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>30 x 18 x 3cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.2KG</Label>
            </TableCell>
            <TableCell>
              <Label>956EUR</Label>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Label>Notebook Basic 17HT-1001</Label>
            </TableCell>
            <TableCell>
              <Label>Very Best Screens</Label>
            </TableCell>
            <TableCell>
              <Label>29 x 17 x 3.1cm</Label>
            </TableCell>
            <TableCell>
              <Label>4.5KG</Label>
            </TableCell>
            <TableCell>
              <Label>1249EUR</Label>
            </TableCell>
          </TableRow>
        </Table>
      </DynamicPage>
      <Dialog
        ref={dialogRef}
        style={{ zIndex: 9999 }}
        className=""
        footer={
          <Bar endContent={<Button onClick={handleClose}>Close</Button>} />
        }
        header={
          <Bar
            endContent={<Icon name="settings" />}
            middleContent={<Title>Well Completion</Title>}
          />
        }
        headerText="Dialog Header"
      >
        <TabContainer
          className=""
          onTabSelect={function noRefCheck() {}}
          slot=""
          style={{
            height: "900px",
            width: "900px",
          }}
          tooltip=""
        >
          <Tab icon="search" selected text="Search and Select">
            <FilterBar
              filterContainerWidth="13.125rem"
              search={<Input placeholder="Search" />}
              showFilterConfiguration
              variants={
                <VariantManagement
                  selectedKey="2"
                  variantItems={[
                    { key: "1", label: "Variant 1" },
                    { key: "2", label: "Variant 2" },
                  ]}
                />
              }
            >
              <FilterGroupItem label="Well Number">
                <Input icon={<Icon name="value-help" />} placeholder="" />
              </FilterGroupItem>
              <FilterGroupItem label="Well Completion">
                <Input icon={<Icon name="value-help" />} placeholder="" />
              </FilterGroupItem>
              <FilterGroupItem label="WC Name">
                <Input icon={<Icon name="value-help" />} placeholder="" />
              </FilterGroupItem>
              <FilterGroupItem label="API Well Number">
                <Input icon={<Icon name="value-help" />} placeholder="" />
              </FilterGroupItem>
              <FilterGroupItem label="API WC Number">
                <Input icon={<Icon name="value-help" />} placeholder="" />
              </FilterGroupItem>
              <FilterGroupItem label="WC Type">
                <Input icon={<Icon name="value-help" />} placeholder="" />
              </FilterGroupItem>
            </FilterBar>
            <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
              Items (123)
            </Title>
            <Table
              columns={
                <>
                  <TableColumn>
                    <CheckBox />
                  </TableColumn>
                  <TableColumn popinText="Well Number">
                    <Label>Well Number</Label>
                  </TableColumn>
                  <TableColumn popinText="Well Completion">
                    <Label>Well Completion</Label>
                  </TableColumn>
                  <TableColumn demandPopin minWidth={600} popinText="WC Name">
                    <Label>WC Name</Label>
                  </TableColumn>
                  <TableColumn>
                    <Label>API Well Number</Label>
                  </TableColumn>
                  <TableColumn>
                    <Label>API WC Number</Label>
                  </TableColumn>
                  <TableColumn>
                    <Label>WC Type</Label>
                  </TableColumn>
                </>
              }
            >
              <TableRow>
                <TableCell>
                  <CheckBox />
                </TableCell>
                <TableCell>
                  <Label>Very Best Screens</Label>
                </TableCell>
                <TableCell>
                  <Label>30 x 18 x 3cm</Label>
                </TableCell>
                <TableCell>
                  <Label>4.2KG</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CheckBox />
                </TableCell>
                <TableCell>
                  <Label>Very Best Screens</Label>
                </TableCell>
                <TableCell>
                  <Label>30 x 18 x 3cm</Label>
                </TableCell>
                <TableCell>
                  <Label>4.2KG</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CheckBox />
                </TableCell>
                <TableCell>
                  <Label>Very Best Screens</Label>
                </TableCell>
                <TableCell>
                  <Label>30 x 18 x 3cm</Label>
                </TableCell>
                <TableCell>
                  <Label>4.2KG</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CheckBox />
                </TableCell>
                <TableCell>
                  <Label>Very Best Screens</Label>
                </TableCell>
                <TableCell>
                  <Label>30 x 18 x 3cm</Label>
                </TableCell>
                <TableCell>
                  <Label>4.2KG</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CheckBox />
                </TableCell>
                <TableCell>
                  <Label>Very Best Screens</Label>
                </TableCell>
                <TableCell>
                  <Label>29 x 17 x 3.1cm</Label>
                </TableCell>
                <TableCell>
                  <Label>4.5KG</Label>
                </TableCell>
                <TableCell>
                  <Label>1249EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
                <TableCell>
                  <Label>956EUR</Label>
                </TableCell>
              </TableRow>
            </Table>
            <Title style={{ marginBottom: "8px", marginTop: "8px" }}>
              Selected Items and Conditions (1)
            </Title>
            <MultiComboBox style={{ width: "100%" }}>
              <MultiComboBoxItem text="Item 1" />
              <MultiComboBoxItem text="Item 2" />
              <MultiComboBoxItem text="Item 3" />
              <MultiComboBoxItem text="Item 4" />
              <MultiComboBoxItem text="Item 5" />
            </MultiComboBox>
          </Tab>
          <Tab icon="filter" text="Define Conditions">
            Content Tab 2
          </Tab>
        </TabContainer>
      </Dialog>
    </FlexBox>
  );
};
