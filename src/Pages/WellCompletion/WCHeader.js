import {
  DatePicker,
  FilterBar,
  FilterGroupItem,
  Icon,
  Input,
  MultiComboBox,
  MultiComboBoxItem,
  Option,
  Select,
} from "@ui5/webcomponents-react";
import { QueryInput } from "./QueryInput";

export const WCHeader = (props) => {
  const wellCompletionValueHelperMeta = {
    columnHeaders: [
      "Well Number",
      "Well Completion",
      "WC Name",
      "API Well Number",
      "API WC Number",
      "State",
      "County",
      "WC Xref1",
      "WC Xref2",
    ],
    metaData: [
      {
        name: "well_number",
        label: "Well Number",
        seqNo: "1",
        length: "15",
        dataType: "char",
        fieldKey: "wl_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Well Number",
        isSingleInput: false,
        keyFieldParms: "key_field=Well Completion&display_first=[wl_no]",
        modelGridData: null,
        fieldKeyInStore: "wellNumber",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "well_completion",
        label: "Well Completion",
        seqNo: "2",
        length: "14",
        dataType: "char",
        fieldKey: "wc_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Well Completion Number",
        isSingleInput: false,
        keyFieldParms: "key_field=Well Completion&display_first=[wl_no, wc_no]",
        modelGridData: null,
        fieldKeyInStore: "wellCompletion",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "wc_name",
        label: "WC Name",
        seqNo: "3",
        length: "35",
        dataType: "char",
        fieldKey: "wc_de",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Well Completion Name",
        isSingleInput: false,
        keyFieldParms: "key_field=Well Completion&display_first=[wl_no, wc_de]",
        modelGridData: null,
        fieldKeyInStore: "wcName",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "api_well_number",
        label: "API Well Number",
        seqNo: "4",
        length: "12",
        dataType: "char",
        fieldKey: "api_well_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "API Well Number",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Well Completion&display_first=[wl_no, api_well_no]",
        modelGridData: null,
        fieldKeyInStore: "apiWellNumber",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "api_wc_number",
        label: "API WC Number",
        seqNo: "5",
        length: "3",
        dataType: "char",
        fieldKey: "api_wc_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "API Well Completion Number",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Well Completion&display_first=[wl_no, api_wc_no]",
        modelGridData: null,
        fieldKeyInStore: "apiWcNumber",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "wc_type",
        label: "WC Type",
        seqNo: "6",
        length: "2",
        dataType: "char",
        fieldKey: "wc_type",
        keyField: true,
        selectOptions: ["OW", "GW"],
        drop_down: true,
        isComment: false,
        isCheckbox: false,
        description: "Well Completion Type",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Well Completion&display_first=['wl_no', 'wc_type']",
        modelGridData: null,
        fieldKeyInStore: "wcType",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "state",
        label: "State",
        seqNo: "7",
        length: "2",
        dataType: "char",
        fieldKey: "pri_geo_loc",
        keyField: true,
        drop_down: true,
        isComment: false,
        selectOptions: [
          "Alabama",
          "Alaska",
          "American Samoa",
          "Arizona",
          "Arkansas",
          "Colorado",
          "Indiana",
          "Hawaii",
          "New Jersey",
          "New Mexico",
          "North Dakota",
          "South Carolina",
        ],
        isCheckbox: false,
        description: "Primary Geographic Location",
        isSingleInput: false,
        keyFieldParms: "country_code=",
        modelGridData: null,
        fieldKeyInStore: "state",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/division-order/state_list/",
      },
      {
        name: "county",
        label: "County",
        seqNo: "8",
        length: "50",
        dataType: "char",
        fieldKey: "sec_geo_loc",
        keyField: true,
        selectOptions: [
          "Autauga County",
          "Baldwin County",
          "Choctaw County",
          "Clay County",
          "Elmore County",
          "Henry County",
          "Lamar County",
          "Lawrence County",
          "Limestone County",
          "Monroe County",
          "Winston County",
          "Denali Borough",
        ],
        drop_down: true,
        isComment: false,
        isCheckbox: false,
        description: "Secondary Geographic Location",
        isSingleInput: false,
        keyFieldParms: "state_list=",
        modelGridData: null,
        fieldKeyInStore: "county",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/division-order/county_list/",
      },
      {
        name: "wc_xref_1",
        label: "WC Xref 1",
        seqNo: "12",
        length: "20",
        dataType: "char",
        fieldKey: "wc_xref1",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "WC Cross Reference 1",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Well Completion&display_first=[wl_no, wc_xref1]",
        modelGridData: null,
        fieldKeyInStore: "wcXref1",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "wc_xref_2",
        label: "WC Xref 2",
        seqNo: "13",
        length: "20",
        dataType: "char",
        fieldKey: "wc_xref2",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "WC Cross Reference 2",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Well Completion&display_first=[wl_no, wc_xref2]",
        modelGridData: null,
        fieldKeyInStore: "wcXref2",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
    ],
  };
  const propertyValueHelperMeta = {
    columnHeaders: [
      "Property",
      "Property Name",
      "Property Type",
      "State",
      "County",
      "Property Xref1",
      "Property Xref2",
      "Unit Property",
      "Tract DOI",
      "Tract Distribution",
    ],
    metaData: [
      {
        name: "property",
        label: "Property",
        seqNo: "1",
        length: "8",
        dataType: "char",
        fieldKey: "pr_no",
        keyField: true,
        isComment: false,
        isCheckbox: false,
        drop_down: false,
        description: "Property Number",
        isSingleInput: false,
        keyFieldParms: "key_field=Division Order Property",
        modelGridData: null,
        fieldKeyInStore: "propertyNumber",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "property_name",
        label: "Property Name",
        seqNo: "2",
        length: "35",
        dataType: "char",
        fieldKey: "pr_nm",
        drop_down: false,
        keyField: false,
        isComment: false,
        isCheckbox: false,
        description: "Property Name",
        isSingleInput: false,
        keyFieldParms: "key_field=Division Order Property",
        modelGridData: null,
        fieldKeyInStore: "propeertyName",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "property_type",
        label: "Property Type",
        seqNo: "4",
        length: "10",
        dataType: "char",
        drop_down: false,
        fieldKey: "pr_type",
        keyField: true,
        isComment: false,
        isCheckbox: false,
        description: "Property Type",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Division Order Property&display_first=['pr_no', 'pr_type']",
        modelGridData: null,
        fieldKeyInStore: "propertyType",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "state",
        label: "State",
        seqNo: "6",
        length: "45",
        dataType: "char",
        drop_down: true,
        fieldKey: "state_code",
        keyField: true,
        isComment: false,
        isCheckbox: false,
        description: "State",
        selectOptions: [
          "Alabama",
          "Alaska",
          "American Samoa",
          "Arizona",
          "Arkansas",
          "Colorado",
          "Indiana",
          "Hawaii",
          "New Jersey",
          "New Mexico",
          "North Dakota",
          "South Carolina",
        ],
        isSingleInput: false,
        keyFieldParms: "country_name=",
        modelGridData: null,
        fieldKeyInStore: "state",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/division-order/state_list/",
      },
      {
        name: "county",
        label: "County",
        seqNo: "7",
        length: "100",
        dataType: "char",
        fieldKey: "county",
        keyField: true,
        isComment: false,
        isCheckbox: false,
        description: "County",
        drop_down: true,
        selectOptions: [
          "Autauga County",
          "Baldwin County",
          "Choctaw County",
          "Clay County",
          "Elmore County",
          "Henry County",
          "Lamar County",
          "Lawrence County",
          "Limestone County",
          "Monroe County",
          "Winston County",
          "Denali Borough",
        ],
        isSingleInput: false,
        keyFieldParms: "state=",
        modelGridData: null,
        fieldKeyInStore: "county",
        modelGridHeaders: null,
        keyFieldSearchURL: "api/division-order/county_list/",
      },
      {
        name: "property_xref1",
        label: "Property Xref1",
        seqNo: "8",
        length: "20",
        dataType: "char",
        fieldKey: "pr_xref1",
        drop_down: false,
        keyField: true,
        isComment: false,
        isCheckbox: false,
        description: "Property Cross Reference 1",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Division Order Property&display_first=['pr_no', 'pr_xref1', 'pr_xref2']",
        modelGridData: null,
        fieldKeyInStore: "propertyXref1",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "product_xref2",
        label: "Product Xref2",
        seqNo: "9",
        length: "20",
        dataType: "char",
        drop_down: false,
        fieldKey: "pr_xref2",
        keyField: true,
        isComment: false,
        isCheckbox: false,
        description: "Property Cross Reference 1",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Division Order Property&display_first=['pr_no', 'pr_xref2', 'pr_xref1']",
        modelGridData: null,
        fieldKeyInStore: "productXref2",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "unit_property",
        label: "Unit Property",
        seqNo: "10",
        length: "1",
        dataType: "char",
        fieldKey: "unit_fl",
        selectOptions: ["Yes", "No"],
        drop_down: false,
        keyField: false,
        isComment: false,
        isCheckbox: true,
        description: "Unit Property Flag",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "unitProptery",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "tract_dois",
        label: "Tract DOI",
        seqNo: "11",
        length: "1",
        dataType: "char",
        fieldKey: "tract_dois",
        drop_down: false,
        keyField: false,
        isComment: false,
        selectOptions: ["Yes", "No"],
        isCheckbox: true,
        description: "Tract DOI Flag",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "tract_dois",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "tract_distribution",
        label: "Tract Distribution",
        seqNo: "12",
        length: "1",
        dataType: "char",
        drop_down: false,
        fieldKey: "tract_distribution",
        keyField: false,
        isComment: false,
        isCheckbox: true,
        description: "Tract Distribution Flag",
        isSingleInput: false,
        selectOptions: ["Yes", "No"],
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "tract_distribution",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
    ],
  };
  const baValueHelperMeta = {
    columnHeaders: [
      "Business Associate",
      "BA Name",
      "Owner",
      "Status",
      "Entity Type",
      "Resident Country",
      "Resident Region",
      "Intercompany",
      "BA Xref1",
      "BA Xref2",
    ],
    metaData: [
      {
        name: "business_associate",
        label: "Business Associate",
        seqNo: "1",
        length: "10",
        dataType: "char",
        fieldKey: "ba_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Business Associate",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Owner Business Associate&display_first=['id', 'ba_no', 'ba_nm']",
        modelGridData: null,
        fieldKeyInStore: "businessAssociate",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "ba_name",
        label: "BA Name",
        seqNo: "2",
        length: "40",
        dataType: "char",
        fieldKey: "ba_nm",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Business Associate Name",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Owner Business Associate&display_first=['id', 'ba_no', 'ba_nm']",
        modelGridData: null,
        fieldKeyInStore: "baName",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "owner",
        label: "Owner",
        seqNo: "3",
        length: "1",
        dataType: "char",
        fieldKey: "owner_fl",
        selectOptions: ["Yes", "No"],
        keyField: false,
        drop_down: false,
        isComment: false,
        isCheckbox: true,
        description: "BA Owner Indicator",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "owner",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "status",
        label: "Status",
        seqNo: "4",
        length: "1",
        dataType: "char",
        selectOptions: ["Yes", "No"],
        fieldKey: "status_fl",
        keyField: false,
        drop_down: false,
        isComment: false,
        isCheckbox: true,
        description: "BA Status Indicator",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "status",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "entity_type",
        label: "Entity Type",
        seqNo: "5",
        length: "2",
        dataType: "char",
        fieldKey: "entity_type",
        keyField: false,
        drop_down: true,
        isComment: false,
        selectOptions: ["FE", "IN", "OE"],
        isCheckbox: false,
        description: "Entity Type",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "entityType",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "resident_country",
        label: "Resident Country",
        seqNo: "6",
        length: "3",
        dataType: "char",
        fieldKey: "res_cntry",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Resident Country",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "residentCountry",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/division-order/country_list/",
      },
      {
        name: "resident_region",
        label: "Resident Region",
        seqNo: "7",
        length: "2",
        dataType: "char",
        fieldKey: "res_region",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Resident Region",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "residentRegion",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/division-order/state_list/",
      },
      {
        name: "intercompany",
        label: "Intercompany",
        seqNo: "8",
        length: "4",
        dataType: "char",
        fieldKey: "comp_cd",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Intercompany Code",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "intercompany",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/check-layout/remitter/company/",
      },
      {
        name: "ba_xref1",
        label: "BA Xref1",
        seqNo: "9",
        length: "20",
        dataType: "char",
        fieldKey: "ba_xref1",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "BA Cross Reference 1",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Owner Business Associate&display_first=['id', 'ba_no', 'ba_xref1']",
        modelGridData: null,
        fieldKeyInStore: "baXref1",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "ba_xref2",
        label: "BA Xref2",
        seqNo: "10",
        length: "20",
        dataType: "char",
        fieldKey: "ba_xref2",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "BA Cross Reference 2",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Owner Business Associate&display_first=['id', 'ba_no', 'ba_xref2']",
        modelGridData: null,
        fieldKeyInStore: "baXref2",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "log_text",
        label: "Log Text.",
        seqNo: "47",
        length: "9",
        dataType: "char",
        fieldKey: "log_fl",
        keyField: false,
        drop_down: false,
        isComment: true,
        isCheckbox: false,
        description: "Log Flag",
        isSingleInput: true,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "logText",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "comments_text",
        label: "Comments Text",
        seqNo: "48",
        length: "1",
        dataType: "char",
        fieldKey: "comment_fl",
        keyField: false,
        drop_down: false,
        isComment: true,
        isCheckbox: false,
        description: "Comment Flag",
        isSingleInput: true,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "commentFlag",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
    ],
  };
  const doiValueHelperMeta = {
    columnHeaders: [
      "Property",
      "DOI",
      "DOI Name",
      "DOI Type",
      "State",
      "County",
      "DOI Xref1",
      "DOI Xref2",
    ],
    metaData: [
      {
        name: "property",
        label: "Property",
        seqNo: "1",
        length: "8",
        dataType: "char",
        fieldKey: "pr_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Property Number",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Division Order Property&display_first=['pr_no', 'pr_nm']",
        modelGridData: null,
        fieldKeyInStore: "propertyNumber",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "doi",
        label: "DOI",
        seqNo: "2",
        length: "5",
        dataType: "char",
        fieldKey: "doi_no",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Division Of Interest Number",
        isSingleInput: false,
        keyFieldParms:
          "key_field=DOI Tract Participation Factor Detail&display_first=['doi_no']",
        modelGridData: null,
        fieldKeyInStore: "doi",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "doi_name",
        label: "DOI Name",
        seqNo: "3",
        length: "35",
        dataType: "char",
        fieldKey: "doi_nm",
        keyField: false,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "Division Of Interest Name",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "doiName",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "doi_type",
        label: "DOI Type",
        seqNo: "5",
        length: "2",
        dataType: "char",
        fieldKey: "doi_type",
        keyField: true,
        drop_down: true,
        selectOptions: ["D1001", "D1002"],
        isComment: false,
        isCheckbox: false,
        description: "Division Of Interest Type",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "doiType",
        modelGridHeaders: null,
        keyFieldSearchURL: null,
      },
      {
        name: "state",
        label: "State",
        seqNo: "7",
        length: "2",
        dataType: "char",
        fieldKey: "state_code",
        keyField: true,
        drop_down: true,
        selectOptions: [
          "Alabama",
          "Alaska",
          "American Samoa",
          "Arizona",
          "Arkansas",
          "Colorado",
          "Indiana",
          "Hawaii",
          "New Jersey",
          "New Mexico",
          "North Dakota",
          "South Carolina",
        ],
        isComment: false,
        isCheckbox: false,
        description: "State",
        isSingleInput: false,
        keyFieldParms: null,
        modelGridData: null,
        fieldKeyInStore: "state",
        modelGridHeaders: null,
        keyFieldSearchURL: "api/division-order/state_list/",
      },
      {
        name: "county",
        label: "County",
        seqNo: "8",
        length: "20",
        dataType: "char",
        fieldKey: "county",
        keyField: true,
        drop_down: true,
        selectOptions: [
          "Autauga County",
          "Baldwin County",
          "Choctaw County",
          "Clay County",
          "Elmore County",
          "Henry County",
          "Lamar County",
          "Lawrence County",
          "Limestone County",
          "Monroe County",
          "Winston County",
          "Denali Borough",
        ],
        isComment: false,
        isCheckbox: false,
        description: "County",
        isSingleInput: false,
        keyFieldParms: "state_list=",
        modelGridData: null,
        fieldKeyInStore: "county",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/division-order/county_list/",
      },
      {
        name: "doi_xref1",
        label: "DOI Xref1",
        seqNo: "9",
        length: "20",
        dataType: "char",
        fieldKey: "doi_xref1",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "DOI Cross Reference 1",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Division Of Interest&display_first=['id', 'doi_no', 'doi_xref1', 'doi_xref2']",
        modelGridData: null,
        fieldKeyInStore: "doiXref1",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
      {
        name: "doi_xref2",
        label: "DOI Xref2",
        seqNo: "10",
        length: "20",
        dataType: "char",
        fieldKey: "doi_xref2",
        keyField: true,
        drop_down: false,
        isComment: false,
        isCheckbox: false,
        description: "DOI Cross Reference 2",
        isSingleInput: false,
        keyFieldParms:
          "key_field=Division Of Interest&display_first=['id', 'doi_no', 'doi_xref2', 'doi_xref1']",
        modelGridData: null,
        fieldKeyInStore: "doiXref1",
        modelGridHeaders: null,
        keyFieldSearchURL: "/api/cc/keyfield/",
      },
    ],
  };
  return (
    <FilterBar
      style={{ maxHeight: "500px" }}
      showGoOnFB
      filterContainerWidth="13.125rem"
      search={<Input placeholder="Search" />}
      showFilterConfiguration
      hideToggleFiltersButton //(Hides "Hide Filter Bar" button) This is not working, don't know why
    >
      <FilterGroupItem label="Well Number">
        <QueryInput
          label="Well Number"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>

      <FilterGroupItem label="Well Completion">
        <QueryInput
          label="Well Completion"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>

      <FilterGroupItem label="Well Name">
        <QueryInput
          label="Well Name"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>

      <FilterGroupItem label="Selection Date">
        <DatePicker placeholder="" />
      </FilterGroupItem>
      <FilterGroupItem label="API Well Number">
        <QueryInput
          label="Well Completion"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>
      <FilterGroupItem label="API WC Number">
        <QueryInput
          label="Well Completion"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>
      <FilterGroupItem label="BHL Latitude">
        <Input icon={<Icon name="value-help" />} placeholder="" />
      </FilterGroupItem>
      <FilterGroupItem label="BHL Longitude">
        <Input icon={<Icon name="value-help" />} placeholder="" />
      </FilterGroupItem>
      <FilterGroupItem label="Company">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="Cost Center">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="County">
        <MultiComboBox required>
          <MultiComboBoxItem text="USA" />
          <MultiComboBoxItem text="India" />
          <MultiComboBoxItem text="China" />
          <MultiComboBoxItem text="Japan" />
          <MultiComboBoxItem text="Iraq" />
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="DOI">
        <QueryInput label="Property" queryHelperMeta={doiValueHelperMeta} />
      </FilterGroupItem>
      <FilterGroupItem label="Major Product">
        <Select>
          <Option>O</Option>
          <Option>G</Option>
          <Option>A</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="Operated">
        <Select>
          <Option>Yes</Option>
          <Option>No</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="Operator">
        <QueryInput label="Property" queryHelperMeta={baValueHelperMeta} />
      </FilterGroupItem>
      <FilterGroupItem label="Primary DOI">
        <Select>
          <Option>Yes</Option>
          <Option>No</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="Property">
        <QueryInput
          label="Property"
          queryHelperMeta={propertyValueHelperMeta}
        />
      </FilterGroupItem>
      <FilterGroupItem label="Rep Well Count">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="SHL Latitude">
        <Input icon={<Icon name="value-help" />} placeholder="" />
      </FilterGroupItem>
      <FilterGroupItem label="SHL Longitude">
        <Input icon={<Icon name="value-help" />} placeholder="" />
      </FilterGroupItem>
      <FilterGroupItem label="State">
        <MultiComboBox required>
          <MultiComboBoxItem text="California" />
          <MultiComboBoxItem text="Texas" />
          <MultiComboBoxItem text="Florida" />
          <MultiComboBoxItem text="Alaska" />
          <MultiComboBoxItem text="Georgia" />
        </MultiComboBox>
      </FilterGroupItem>
      <FilterGroupItem label="WC Type">
        <Select>
          <Option>LI</Option>
          <Option>OH</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="WC Xref1">
        <QueryInput
          label="Well Completion"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>
      <FilterGroupItem label="WC Xref2">
        <QueryInput
          label="Well Completion"
          queryHelperMeta={wellCompletionValueHelperMeta}
        />
      </FilterGroupItem>
      <FilterGroupItem label="Well Class">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="Well Status">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
    </FilterBar>
  );
};
