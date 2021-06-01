import {
  Button,
  ComboBox,
  ComboBoxItem,
  FlexBox,
  Input,
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";

export const FilterForm = () => {
  return (
    <FlexBox style={spacing.sapUiTinyMarginTopBottom}>
      <ComboBox value="Well Number">
        <ComboBoxItem text="Well Number" />
        <ComboBoxItem text="Well Completion" />
        <ComboBoxItem text="API WellNo" />
        <ComboBoxItem text="API WC No" />
      </ComboBox>
      <ComboBox value="equal to" style={{ marginLeft: "1rem" }}>
        <ComboBoxItem text="equal to" />
        <ComboBoxItem text="greater than" />
        <ComboBoxItem text="less than" />
        <ComboBoxItem text="less than or equal to" />
      </ComboBox>
      <Input placeholder="Value" style={{ marginLeft: "1em", width: "100%" }} />
      <Button key="decline" design="Transparent" icon="decline" />
    </FlexBox>
  );
};
