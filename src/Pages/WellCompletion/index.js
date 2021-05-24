import {
  BusyIndicator,
  Button,
  DynamicPage,
  DynamicPageHeader,
  DynamicPageTitle,
  FilterBar,
  FilterGroupItem,
  Form,
  FormItem,
  Icon,
  Input,
  VariantManagement,
} from "@ui5/webcomponents-react";
import React, { useRef } from "react";

import { WCHeader } from "./WCHeader";
import { WellCompletionTable } from "./WCResults";
import { WCValueHelperDialog } from "./WCValueHelper";

export const WellCompletion = () => {
  const dialogRef = useRef(null);
  const handleOpen = (e) => {
    dialogRef.current.open();
  };
  return (
    <DynamicPage
      title={
        <DynamicPageTitle
          actions={[
            <Button key="add" design="Emphasized">
              Add{" "}
            </Button>,
            <Button key="copy" design="Transparent">
              Copy
            </Button>,
            <Button key="delete" design="Transparent">
              Delete
            </Button>,
          ]}
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
            <Button key="decline" design="Transparent" icon="print" />,
          ]}
        />
      }
      header={
        <DynamicPageHeader>
          {/* <WCHeader handleValueHelp={handleOpen}></WCHeader> */}
          {/* <Form
            style={{
              alignItems: "flex-end",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div>
              <FormItem label="Layout">
                <BusyIndicator className="" slot="" style={{}} tooltip="">
                  <Input icon={<Icon name="search" />} />
                </BusyIndicator>
              </FormItem>
            </div>
            <div>
              <FormItem label="Well Number">
                <Input
                  icon={
                    <Icon
                      name="value-help"
                      // onClick={(event) => props.handleValueHelp("well")}
                    />
                  }
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
            <div
              style={{
                marginTop: "17px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Button key="go" design="Emphasized">
                Go
              </Button>
            </div>
            <div
              style={{
                marginTop: "17px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Button key="filters">Adapt Filters</Button>
            </div>
          </Form> */}

          <FilterBar
            style={{ maxHeight: "500px" }}
            showGoOnFB
            filterContainerWidth="13.125rem"
            search={<Input placeholder="Search" />}
            showFilterConfiguration
            hideToggleFiltersButton //(Hides "Hide Filter Bar" button) This is not working, don't know why
          >
            <FilterGroupItem label="Well Number">
              <Input
                icon={<Icon name="value-help" onClick={handleOpen} />}
                placeholder=""
              />
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
            <FilterGroupItem label="BHL Latitude">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="BHL Longitude">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Company">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Cost Center">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="County">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="DOI">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Major Product">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Operated">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Operator">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Primary DOI">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Property">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Rep Well Count">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="SHL Latitude">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="SHL Longitude">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="State">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Type">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Xref 1">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="WC Xref 2">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Well Class">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
            <FilterGroupItem label="Well Status">
              <Input icon={<Icon name="value-help" />} placeholder="" />
            </FilterGroupItem>
          </FilterBar>
        </DynamicPageHeader>
      }
      style={{
        maxHeight: "calc(100vh-44px)",
      }}
    >
      <WellCompletionTable />
      <WCValueHelperDialog dialogRef={dialogRef} />
    </DynamicPage>
  );
};
