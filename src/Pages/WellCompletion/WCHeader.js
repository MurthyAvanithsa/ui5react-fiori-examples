import {
  BusyIndicator,
  Button,
  Form,
  FormItem,
  Icon,
  Input,
} from "@ui5/webcomponents-react";
import { useState } from "react";

export const WCHeader = (props) => {
  const [active, setActive] = useState(false);

  const handleSearchClick = () => {
    setActive(true);
  };

  return (
    <Form
      columnsM
      style={{
        alignItems: "flex-end",
        // display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div>
        <FormItem label="Layout">
          <BusyIndicator
            active={active}
            className=""
            slot=""
            style={{}}
            tooltip=""
          >
            <Input icon={<Icon name="search" onClick={handleSearchClick} />} />
          </BusyIndicator>
        </FormItem>
      </div>
      <div>
        <FormItem label="Well Number">
          <Input
            icon={
              <Icon
                name="value-help"
                onClick={(event) => props.handleValueHelp("well")}
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
      <div>
        <Button key="go" design="Emphasized">
          Go
        </Button>
      </div>
    </Form>
  );
};
