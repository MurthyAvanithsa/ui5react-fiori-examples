import {
  CheckBox,
  Form,
  FormItem,
  Label,
  Option,
  Select,
  TextArea,
  FormGroup,
  Input,
} from "@ui5/webcomponents-react";

export const DetailForm = () => {
  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      <Form>
        <FormItem label="Well Completion">
          <Input />
        </FormItem>
        <FormItem label={<Label>API Well Number</Label>}>
          <Input />
        </FormItem>
        <FormItem label="Well Completion">
          <Input />
        </FormItem>
        <FormItem label={<Label>API Well Number</Label>}>
          <Input />
        </FormItem>
        <FormItem label="WC Type">
          <Input />
        </FormItem>
        <FormItem
          label="County
"
        >
          <Input />
        </FormItem>
        <FormItem label="SHL Latitude">
          <Input />
        </FormItem>
        <FormItem label="BHL Longitude">
          <Input />
        </FormItem>
        <FormItem label="WC Xref1">
          <Input />
        </FormItem>
        <FormItem label="WC Xref2">
          <Input />
        </FormItem>
        <FormGroup title="GRP1">
          <FormItem label="Velocity">
            <Input />
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
