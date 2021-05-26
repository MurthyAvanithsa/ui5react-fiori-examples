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
    <div>
      <Form title="">
        <FormGroup>
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
        </FormGroup>
      </Form>
    </div>
  );
};
