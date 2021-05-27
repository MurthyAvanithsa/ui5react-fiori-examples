import {
  Form,
  FormItem,
  Label,
  Option,
  Select,
  FormGroup,
  Input,
  Icon,
} from "@ui5/webcomponents-react";

export const DetailForm = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <Form labelSpanS>
        <FormItem label={<Label>Well Completion</Label>}>
          <Input disabled value={"WC1000071"} />
        </FormItem>
        <FormItem label={<Label>API Well Number</Label>}>
          <Input icon={<Icon name="value-help" />} />
        </FormItem>
        <FormItem label={<Label>API WC Number</Label>}>
          <Input icon={<Icon name="value-help" />} />
        </FormItem>
        <FormItem label="WC Type">
          <Select>
            <Option>OW</Option>
            <Option>GW</Option>
          </Select>
        </FormItem>
        <FormItem label="State">
          <Input icon={<Icon name="value-help" />} />
        </FormItem>
        <FormItem
          label="County
"
        >
          <Input icon={<Icon name="value-help" />} />
        </FormItem>
        <FormItem label="SHL Latitude">
          <Input required />
        </FormItem>
        <FormItem required label="SHL Longitude">
          <Input />
        </FormItem>
        <FormItem label="BHL Latitude">
          <Input />
        </FormItem>
        <FormItem label="BHL Longitude">
          <Input />
        </FormItem>
        <FormItem label="WC Xref1">
          <Input icon={<Icon name="value-help" />} valueState={"Error"} />
        </FormItem>
        <FormItem label="WC Xref2">
          <Input icon={<Icon name="value-help" />} />
        </FormItem>
        <FormGroup title="GRP1">
          <FormItem label="Velocity">
            <Input valueState={"Warning"} />
          </FormItem>
          <FormItem label="Fluid Volume">
            <Input />
          </FormItem>
        </FormGroup>
        <FormGroup title="GRP2">
          <FormItem label="Velocity">
            <Input />
          </FormItem>
        </FormGroup>
        <FormGroup title="GRP3">
          <FormItem label="Fluid Volume">
            <Input />
          </FormItem>
        </FormGroup>
      </Form>
    </div>
  );
};
