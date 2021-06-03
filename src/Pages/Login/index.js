import { Grid, Icon } from "@material-ui/core";
import {
  Button,
  FlexBox,
  Input,
  RadioButton,
  Text,
  Title,
} from "@ui5/webcomponents-react";
import { Link } from "react-router-dom";
import water from "../../assets/water.jpg";
import { ThemingParameters } from "@ui5/webcomponents-react-base/dist/ThemingParameters";
import { createUseStyles } from "react-jss";

const styles = {
  title: {
    // color: "red",
    color: ThemingParameters.sapButton_TextColor,
  },
};

const useStyles = createUseStyles(styles, { name: "Login" });

export const Login = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        height: "calc(100vh - 44px)",
        backgroundImage: `url(${water})`,
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.2)",
        // opacity: 0.2,
      }}
      spacing={2}
    >
      <Grid item>
        <Input
          placeholder="User"
          icon={<Icon name="employee" />}
          style={{ width: "265px" }}
        />
      </Grid>
      <Grid item>
        <Input
          type="Password"
          placeholder="Password"
          icon={<Icon name="locked" />}
          style={{ width: "265px" }}
        />
      </Grid>
      <Grid item>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            {/* <div className={classes.title}> */}
            <Grid container alignItems="center">
              <Grid item>
                <RadioButton
                //   text="Stay logged in"
                />
              </Grid>
              <Grid item style={{ marginBottom: "5px" }}>
                <Text>Stay logged in</Text>
              </Grid>
            </Grid>
            {/* </div> */}
          </Grid>
          <Grid item style={{ marginBottom: "5px" }}>
            {/* <Link> */}
            <Text>Forgot your Password?</Text>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button design="Emphasized" style={{ width: "80px", height: "32px" }}>
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
