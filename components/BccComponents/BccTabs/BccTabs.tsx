import Tabs from "@material-ui/core/Tabs";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const BccTabs = withStyles({
  root: {
    "& .MuiTabs-indicator": {
      height: 3,
      backgroundColor: "#00A755",
    },
    "& .MuiTabs-flexContainer": {
      alignItems: "center",
      overflowX: "auto",
    },
    "& span a": {
      height: "auto",
      padding: "20px 0",
    },
  },
})((props: any) => <Tabs {...props} />);

export default BccTabs;
