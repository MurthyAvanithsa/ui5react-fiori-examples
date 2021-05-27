import {
  DatePicker,
  FilterBar,
  FilterGroupItem,
  Icon,
  Input,
  Option,
  Select,
} from "@ui5/webcomponents-react";

export const WCHeader = (props) => {
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
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="Well Completion">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="WC Name">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="Selection Date">
        <DatePicker placeholder="" />
      </FilterGroupItem>
      <FilterGroupItem label="API Well Number">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="API WC Number">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
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
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="DOI">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
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
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="Primary DOI">
        <Select>
          <Option>Yes</Option>
          <Option>No</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="Property">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
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
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="WC Type">
        <Select>
          <Option>LI</Option>
          <Option>OH</Option>
        </Select>
      </FilterGroupItem>
      <FilterGroupItem label="WC Xref1">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
        />
      </FilterGroupItem>
      <FilterGroupItem label="WC Xref2">
        <Input
          icon={<Icon name="value-help" onClick={props.handleValueHelp} />}
          placeholder=""
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
