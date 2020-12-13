import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    chipStyle: {
      fontWeight: 400,
      display: "inline-block",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 12,
      lineHeight: "12px",
      padding: "8px 12px",
      borderRadius: 30,
      whiteSpace: "nowrap",
    },
    block: {
      display: "block",
    },
    filled: {},
    outlined: {},
    fPrimary: {
      color: "white",
      backgroundColor: "#00A755",
    },
    fSecondary: {
      color: "white",
      backgroundColor: "#4D565F",
    },
    fSale: {
      color: "white",
      backgroundColor: "#E3266A",
    },
    oPrimary: {
      color: "#00A755",
      border: "1px solid #00A755",
    },
    oSecondary: {
      color: "#4D565F",
      border: "1px solid #4D565F"
    },
    oSale: {
      color: "#E3266A",
      border: "1px solid #E3266A",
    },
    active: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: "#D0D0D0",
        border: "1px solid #D0D0D0",
      }
    }
  })
);

interface BccChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: any;
  weight?: "normal" | "medium" | "bold";
  block?: boolean;
  mt?: string | "0";
  mr?: string | "0";
  mb?: string | "0";
  ml?: string | "0";
  type: "contained" | "outlined";
  color: "primary" | "secondary" | "sale";
  className?: string;
  onClick?: any;
}

const BccChip = (props: BccChipProps) => {
  const classes = useStyles();
  const { type, color, block, mt, mr, mb, ml, className, children, onClick } = props;
  const typeOfChip = () => {
    if (type === "contained") {
      if (color === "primary") return classes.fPrimary;
      else if (color === "secondary") return classes.fSecondary;
      else if (color === "sale") return classes.fSale;
      else return classes.fPrimary;
    } else if (type === "outlined") {
      if (color === "primary") return classes.oPrimary;
      else if (color === "secondary") return classes.oSecondary;
      else if (color === "sale") return classes.oSale;
      else return classes.oPrimary;
    } else return classes.fPrimary;
  };
  return (
    <span
      className={`${classes.chipStyle} ${typeOfChip()} ${
        block ? classes.block : ""
      } ${className ? className : ""} ${onClick && type === 'outlined' ? classes.active : ''}`}
      style={{
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        marginLeft: ml,
      }}
      onClick={onClick && onClick}
    >
      {children}
    </span>
  );
};

export default BccChip;
