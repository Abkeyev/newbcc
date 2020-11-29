import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";

const BccLink = withStyles({
  root: {
    fontSize: "inherit",
    textDecoration: "inherit",
    color: "inherit",
    cursor: "pointer",
    fontWeight: "normal",
    textTransform: "none",
    letterSpacing: 0,
    "&:hover": {
      textDecoration: "inherit",
    },
  },
})(Link);

export default BccLink;
