import { makeStyles, createStyles } from "@material-ui/core/styles";
import React from "react";
import Select from "react-select";

const useStyles = makeStyles(() =>
  createStyles({
    selectWrap: {
      display: "inline-block",
    },
    errorText: {
      color: "#C84F4F",
      fontSize: 12,
      display: "inline-block",
      marginTop: 4,
    },
  })
);

const BccSelect = (props: any) => {
  const classes = useStyles();

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "#27AE60" : "#000D1A",
      padding: "16px 20px",
      backgroundColor: state.isFocused ? "#E9F7EF" : "",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      // none of react-select's styles are passed to <Control />
      minHeight: 56,
      border: state.isFocused
        ? "1px solid #27AE60"
        : props.error
        ? "1px solid #C84F4F"
        : state.isDisabled
        ? "0px solid #F3F3F3"
        : "1px solid #E8E8E8",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#B9B9B9",
      },
    }),
    placeholder: () => ({}),
    multiValue: (provided: any) => ({
      ...provided,
      backgroundColor: "#E9F7EF",
    }),
    multiValueRemove: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      fontSize: 16,
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
        color: "black",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: "20px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    container: (provided: any) => ({
      ...provided,
      // none of react-select's styles are passed to <Control />
      minWidth: 100,
      maxWidth: 360,
      fontSize: 16,
      fontWeight: "normal",
      color: "#5b5b5b",
      padding: 0,
    }),
    noOptionsMessage: (provided: any) => ({
      ...provided,
      color: "#80868C",
      fontSize: 16,
      textAlign: "left",
      padding: "16px 20px",
      borderTop: "1px solid #F3F3F3",
      fontWeight: "normal",
    }),
    menu: (provided: any) => ({
      ...provided,
      border: "1px solid #27ae60",
      marginTop: 0,
      borderTop: 0,
      padding: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      boxShadow: "none",
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <div className={classes.selectWrap}>
      <Select
        noOptionsMessage={() => "Вариантов не наидено"}
        classNamePrefix="react-select"
        styles={customStyles}
        {...props}
      />
      {props.error && (
        <span className={classes.errorText}>{props.errorText}</span>
      )}
    </div>
  );
};

export default BccSelect;
