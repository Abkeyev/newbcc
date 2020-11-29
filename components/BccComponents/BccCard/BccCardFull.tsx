import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip } from "../";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: 48,
        margin: "0 auto",
        "& > div": {
          "& > div:first-child": {
            width: "calc(70% - 48px)",
            textAlign: "left",
          },
          "& > div:last-child": {
            width: "calc(30% - 48px)",
            textAlign: "center",
            "& > img": {
              width: "100%",
              maxWidth: 250,
            },
          },
        },
      },
      chipWrap: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        "& > span:last-child": {
          marginBottom: 16,
        },
      },
      mobileApp: {
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        padding: "32px 64px 0",
        borderRadius: 12,
        "& > div:first-child": {
          width: "80%",
          marginRight: 48,
        },
      },
      desc: {
        marginBottom: 48,
      },
      qr: {},
      title: {},
      AS: {
        marginRight: 36,
      },
      GP: {
        marginRight: 40,
      },
      mobileLinks: {},
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#fafafa",
      },
      chipWrap: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        "& > span:last-child": {
          marginBottom: 16,
        },
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: 24,
        margin: "0 auto",
      },
      mobileApp: {
        backgroundColor: "#ffffff",
        padding: "20px 20px 0",
        borderRadius: 8,
        flexWrap: "wrap",
        justifyContent: "center",
        "& > div:first-child": {
          marginRight: 0,
          width: "100%",
        },
        "& > div:last-child": {
          "& > img": {
            // maxWidth:
          },
        },
      },
      desc: {
        marginBottom: 20,
        textAlign: "center",
        "& > img": {
          maxWidth: 140,
        },
      },
      qr: { display: "none" },
      title: { display: "none" },
      mobMA: {
        display: "block",
        width: "max-content",
        textTransform: "uppercase",
        marginBottom: 26,
      },
      AS: {
        marginRight: 18,
      },
      GP: {
        marginRight: 0,
      },
      mobileLinks: {
        justifyContent: "center",
        marginBottom: 12,
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: 24
      },
      mobMA: {
        width: "auto",
      },
      desc: {
        "& img": {
          maxWidth: 120,
        },
      },
    },
  })
);

interface Chip {
  title: string;
  type: "filled" | "outlined";
  color: "primary" | "secondary" | "sale";
}

interface BccCardFullProps extends React.HTMLAttributes<HTMLDivElement> {
  title: any;
  text: any;
  chips?: Array<Chip>;
  bgColor?: string;
  bgImg?: string;
}

const BccCardFull = (props: BccCardFullProps) => {
  const classes = useStyles({});
  const { text, bgImg, title, chips } = props;

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.mobileApp}
        >
          <Grid item>
            {chips?.length && (
              <div className={classes.chipWrap}>
                {chips.map((c: any) => {
                  return (
                    <>
                      <BccChip
                        className={classes.mobMA}
                        type={c.type}
                        color={
                          c.color === "sale"
                            ? "sale"
                            : c.color === "secondary"
                            ? "secondary"
                            : "primary"
                        }
                      >
                        {c.title}
                      </BccChip>
                    </>
                  );
                })}
              </div>
            )}
            <BccTypography
              type="h2"
              mb="12px"
              mt="24px"
              block
              className={classes.mobMA}
            >
              {title}
            </BccTypography>
            <BccTypography
              type="h5"
              weight="normal"
              className={classes.desc}
              block
            >
              {text}
            </BccTypography>
          </Grid>
          <Grid item style={{ width: "50%" }}>
            <img
              src={bgImg}
              style={{
                width: "80%",
                margin: "0 auto",
                maxHeight: 300,
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default BccCardFull;
