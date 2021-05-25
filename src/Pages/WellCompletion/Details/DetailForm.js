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
    <Form title="Test Form">
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
          <TextArea rows={5} />
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
      </FormGroup>
    </Form>
  );
};
