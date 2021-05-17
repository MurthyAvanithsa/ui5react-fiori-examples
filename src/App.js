import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  SideNavigation,
  SideNavigationItem,
  SideNavigationSubItem,
  ThemeProvider,
  DynamicPage,
  Label,
  DynamicPageHeader,
  ObjectStatus,
  DynamicPageTitle,
  Button,
  Breadcrumbs,
  Badge,
  Title,
  Form,
  FormItem,
  Input,
  FormGroup,
  Select,
  Option,
  TextArea,
  CheckBox,
} from "@ui5/webcomponents-react";
import React from "react";
import "./App.css";

import { useState } from "react";

function App() {
  const [expand, setExpand] = useState(true);
  const handleClick = (event) => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 For PRA">
        <ui5-button
          icon="menu"
          slot="startButton"
          id="startButton"
          onClick={handleClick}
        ></ui5-button>
      </ShellBar>
      <FlexBox
        style={{ width: "100%", height: "100vh" }}
        // direction={FlexBoxDirection.Column}
        // justifyContent={FlexBoxJustifyContent.Center}
      >
        <SideNavigation
          collapsed={expand}
          className=""
          fixedItems={
            <>
              <SideNavigationItem icon="chain-link" text="Useful Links" />
              <SideNavigationItem icon="history" text="History" />
            </>
          }
          onSelectionChange={function noRefCheck() {}}
          slot=""
          style={{}}
          tooltip=""
        >
          <SideNavigationItem icon="home" text="Home" />
          <SideNavigationItem expanded icon="group" text="People">
            <SideNavigationSubItem text="From My Team" />
            <SideNavigationSubItem text="From Other Teams" />
          </SideNavigationItem>
          <SideNavigationItem icon="locate-me" selected text="Locations" />
          <SideNavigationItem icon="calendar" text="Events">
            <SideNavigationSubItem text="Local" />
            <SideNavigationSubItem text="Others" />
          </SideNavigationItem>
        </SideNavigation>
        <DynamicPage
          header={
            <DynamicPageHeader>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Label>Location: Warehouse A</Label>
                <Label>Halway: 23L</Label>
                <Label>Rack: 34</Label>
                <FormItem label="Sole Form Item">
                  <Input />
                </FormItem>

                <FormItem label="Sole Form Item">
                  <Input />
                </FormItem>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "2vw",
                }}
              >
                <Label>Availability:</Label>
                <ObjectStatus state="Success">In Stock</ObjectStatus>
              </div>
            </DynamicPageHeader>
          }
          style={{
            maxHeight: "700px",
          }}
          title={
            <DynamicPageTitle
              actions={[
                <Button key="edit" design="Emphasized">
                  Edit
                </Button>,
                <Button key="delete" design="Transparent">
                  Delete
                </Button>,
                <Button key="copy" design="Transparent">
                  Copy
                </Button>,
                <Button key="action" design="Transparent" icon="action" />,
              ]}
              breadcrumbs={
                <Breadcrumbs>
                  <Link>Home</Link>
                  <Link>Page 1</Link>
                  <Link>Page 2</Link>
                  <Link>Page 3</Link>
                  <Link>Page 4</Link>
                  <Link>Page 5</Link>
                </Breadcrumbs>
              }
              heading={<Title>Header Title</Title>}
              navigationActions={[
                <Button
                  key="fullscreen"
                  design="Transparent"
                  icon="full-screen"
                />,
                <Button
                  key="exitFullscreen"
                  design="Transparent"
                  icon="exit-full-screen"
                />,
                <Button key="decline" design="Transparent" icon="decline" />,
              ]}
              subHeading={<Label>This is a subheading</Label>}
            >
              <Badge>Status: OK</Badge>
            </DynamicPageTitle>
          }
        >
          <Form title="Test Form">
            <FormItem label="Sole Form Item">
              <Input />
            </FormItem>
            <FormGroup title="Personal Data">
              <FormItem label="Name">
                <Input />
              </FormItem>
              <FormItem label={<Label>Address</Label>}>
                <Input />
              </FormItem>
              <FormItem label="Country">
                <Select>
                  <Option>Germany</Option>
                  <Option>France</Option>
                  <Option>Italy</Option>
                </Select>
              </FormItem>
              <FormItem label="Additional Comment">
                <TextArea
                  rows={5}
                  style={{
                    width: "210px",
                  }}
                />
              </FormItem>
              <FormItem label="Home address">
                <CheckBox checked />
              </FormItem>
            </FormGroup>
            <FormGroup title="Company Data">
              <FormItem label="Company Name">
                <Input />
              </FormItem>
              <FormItem label="Company Address">
                <Input />
              </FormItem>
              <FormItem label="Company City">
                <Input />
              </FormItem>
              <FormItem label="Company Country">
                <Input />
              </FormItem>
              <FormItem label="Number of Employees">
                <Input disabled type="Number" value="5000" />
              </FormItem>
              <FormItem label="Member of Partner Network">
                <CheckBox checked />
              </FormItem>
            </FormGroup>
            <FormGroup title="Marketing Data">
              <FormItem label="Email">
                <Input type="Email" />
              </FormItem>
              <FormItem label="Company Email">
                <Input type="Email" />
              </FormItem>
              <FormItem label="I want to receive the newsletter">
                <CheckBox />
              </FormItem>
            </FormGroup>
          </Form>
        </DynamicPage>
      </FlexBox>
    </ThemeProvider>
  );
}

export default App;
