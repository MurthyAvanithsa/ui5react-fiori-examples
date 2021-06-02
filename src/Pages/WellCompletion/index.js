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
import React, { useEffect, useRef, useState } from "react";

import { WCHeader } from "./WCHeader";
import { WellCompletionTable } from "./WCResults";
import { WCValueHelperDialog } from "./WCValueHelper";
import { QueryInput } from '../Components/QueryInput';
import ValueHelperMetaData from '../Components/ValueHelperMetaData';
import ValueHelperDialog from '../Components/ValueHelper'

export const WellCompletion = () => {
  const dialogRef = useRef(null);
  
  const [MetaData, setMetaData] = useState([]);

    React.useEffect(() => {
        fetch('http://cc.tecnicslabs.com/api/meta_data/?screen_name=well_completion_meta&object_type=[%27WELL_COMPLETION%27,%27WC_DATED%27]')
            .then(results => results.json())
            .then(data => {
                console.log("apiData", data)
                setMetaData(data['well_completion_meta']['form_meta_data'])
            })
    }, [])
  // console.log("metaData", MetaData)


  React.useEffect(()=>{
    return() => {
      // console.log("changed")
    }
  },[MetaData])
  
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
            {
              MetaData.map((FieldMetaData, Index) => (

                <FilterGroupItem label={FieldMetaData.label} key={`${Index}-FieldMeta`}>
                  <QueryInput FieldMetaData = {FieldMetaData}
                              openValueHelper = {handleOpen}>
                               
                  </QueryInput>
                </FilterGroupItem>
              ))
            }             
            
          </FilterBar>
        </DynamicPageHeader>
      }
      style={{
        maxHeight: "calc(100vh-44px)",
      }}
    >
      <WellCompletionTable />
      {/* <WCValueHelperDialog dialogRef={dialogRef} /> */}
      <ValueHelperDialog 
                                        dialogRef= {dialogRef}
                                        ValueHelperMetaData = {ValueHelperMetaData}
                                        >
                                </ValueHelperDialog>
      
      
    </DynamicPage>
  );
};
