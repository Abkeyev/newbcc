import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    typographyText: {
      fontWeight: 400,
      display: "inline-block",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 18,
      lineHeight: "24px",
      padding: 0,
      margin: 0,
      "& a": {
        color: "inherit",
        textDecoration: "inherit",
      },
    },
    p1: {
      fontSize: 18,
      lineHeight: "24px",
    },
    p2: {
      fontSize: 16,
      lineHeight: "20px",
    },
    p2l: {
      fontSize: 18,
      lineHeight: "24px",
    },
    p3: {
      fontSize: 14,
      lineHeight: "24px",
    },
    p4: {
      fontSize: 12,
      lineHeight: "16px",
    },
    typographyTitle: {
      display: "inline-block",
      fontWeight: 500,
      lineHeight: "52px",
      padding: 0,
      margin: 0,
      "& a": {
        color: "inherit",
        textDecoration: "inherit",
      },
    },
    h1: {
      fontSize: 48,
      ["@media (max-width:960px)"]: {
        fontSize: 40,
        lineHeight: "40px",
      },
      ["@media (max-width:600px)"]: {
        fontSize: 28,
        lineHeight: "28px",
      },
    },
    h2: {
      fontSize: 40,
      lineHeight: "40px",
      ["@media (max-width:600px)"]: {
        fontSize: 28,
        lineHeight: "28px",
      },
    },
    h3: {
      fontSize: 28,
      lineHeight: "28px",
    },
    h4: {
      fontSize: 22,
      lineHeight: "24px",
    },
    h5: {
      fontSize: 20,
      lineHeight: "24px",
    },
    h6: {
      fontSize: 18,
      lineHeight: "20px",
    },
    block: {
      display: "block",
    },
    normal: {
      fontWeight: 400,
    },
    medium: {
      fontWeight: 500,
    },
    bold: {
      fontWeight: 600,
    },
  })
);

interface BccTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: any;
  weight?: "normal" | "medium" | "bold";
  color?: string;
  align?: "center" | "left" | "right" | "justify";
  block?: boolean;
  mt?: string | "0";
  mr?: string | "0";
  mb?: string | "0";
  ml?: string | "0";
  td?: "underline" | "";
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p1"
    | "p2"
    | "p2l"
    | "p3"
    | "p4";
  className?: string;
  onClick?: any;
}

const BccTypography = (props: BccTypographyProps) => {
  const classes = useStyles();
  const {
    type,
    weight,
    color,
    align,
    block,
    td,
    mt,
    mr,
    mb,
    ml,
    className,
    children,
    onClick
  } = props;

  const weightClass =
    weight === "bold"
      ? classes.bold
      : weight === "medium"
      ? classes.medium
      : classes.normal;
  const blockClass = block ? classes.block : "";
  const classNameClass = className ? className : "";
  const styleClass = {
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    color: color,
    textAlign: align,
    textDecoration: td,
  };
  return (
    <>
      {type === "h1" ? (
        <h1
          className={
            classes.typographyTitle +
            " " +
            classes.h1 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </h1>
      ) : type === "h2" ? (
        <h2
          className={
            classes.typographyTitle +
            " " +
            classes.h2 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </h2>
      ) : type === "h3" ? (
        <h3
          className={
            classes.typographyTitle +
            " " +
            classes.h3 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </h3>
      ) : type === "h4" ? (
        <h3
          className={
            classes.typographyTitle +
            " " +
            classes.h3 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </h3>
      ) : type === "h5" ? (
        <h4
          className={
            classes.typographyTitle +
            " " +
            classes.h4 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </h4>
      ) : type === "h6" ? (
        <h5
          className={
            classes.typographyTitle +
            " " +
            classes.h5 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </h5>
      ) : type === "p1" ? (
        <p
          className={
            classes.typographyText +
            " " +
            classes.p1 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </p>
      ) : type === "p2" ? (
        <p
          className={
            classes.typographyText +
            " " +
            classes.p2 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </p>
      ) : type === "p2l" ? (
        <p
          className={
            classes.typographyText +
            " " +
            classes.p2l +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </p>
      ) : type === "p3" ? (
        <p
          className={
            classes.typographyText +
            " " +
            classes.p3 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </p>
      ) : type === "p4" ? (
        <p
          className={
            classes.typographyText +
            " " +
            classes.p4 +
            " " +
            weightClass +
            " " +
            blockClass +
            " " +
            classNameClass
          }
          style={styleClass}
          onClick={onClick && onClick}
        >
          {children}
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default BccTypography;
