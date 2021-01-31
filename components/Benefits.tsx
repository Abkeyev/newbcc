import React from "react";
import { Grid } from "@material-ui/core";
import { BccTypography } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BenefitsProps, BenefitItemProps, imgURL } from '../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "48px",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        "& > div": {
          background: "#FFFFFF",
          width: "calc(33.33% - 12px)",
          marginBottom: 30,
          marginRight: 18,
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          padding: 20,
          "& > div:first-child": {
            width: "calc(20% - 10px)",
            textAlign: "center",
            "& > img": {
              width: "100%",
              maxWidth: 40,
              height: "auto",
            },
          },
          "& > div:nth-child(2)": {
            width: "calc(80% - 10px)",
            textAlign: "left",
          },
        },
        "& > div.full": {
          padding: 32,
          "& > div:last-child": {
            width: "100%",
            textAlign: "left",
          },
        },
        "& > div:nth-child(3n)": {
          marginRight: 0,
        },
      },
      item2: {
        "& > div": {
          width: "calc(50% - 9px)",
        },
        "& > div:nth-child(3n)": {
          marginRight: 18,
        },
        "& > div:nth-child(2n)": {
          marginRight: 0,
        },
      },
      itemDesc: {
        marginTop: 10,
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#FFFFFF",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
      },
      title: {
        marginBottom: 40,
      },
      item: {
        flexWrap: 'wrap',
        '& > div:nth-child(2n)': {
          marginRight: 0,
        },
        "& > div": {
          background: "#FFFFFF",
          width: "calc(33.33% - 12px)",
          marginBottom: 30,
          marginRight: 18,
          minWidth: 200,
          boxShadow:
            "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
          borderRadius: 8,
          padding: 20,
          justifyContent: 'flex-start',
          flexDirection: 'column',
          "& > div:first-child": {
            width: 36,
            textAlign: "center",
            marginBottom: 20,
            "& > img": {
              width: "100%",
              height: "auto",
            },
          },
          "& > div:nth-child(2)": {
            width: "100%",
            textAlign: "left",
          },
        },
        "& > div.full": {
          padding: 32,
          "& > div:last-child": {
            width: "100%",
            textAlign: "left",
          },
        },
        "& > div:nth-child(3n)": {
          marginRight: 0,
        },
      },
      item2: {
        "& > div": {
          width: "calc(50% - 9px)",
        },
        "& > div:nth-child(3n)": {
          marginRight: 18,
        },
        "& > div:nth-child(2n)": {
          marginRight: 0,
        },
      },
      itemDesc: {
        marginTop: 10,
      },
    },
    escapeDiv: {
      '& > p': {
        margin: 0
      }
    }
  })
);

interface BenefitsComponentProps {
  benefits: BenefitsProps[];
}

const Benefits = (props: BenefitsComponentProps) => {
  const { benefits } = props
  const classes = useStyles({});
  return (
    benefits && benefits.length > 0 ? 
    <>{(benefits as BenefitsProps[]).map((b: BenefitsProps) => (
      <div style={{ backgroundColor: b.color }}>
      <div className={classes.innerContainer}>
        {b.title !== "" && (
          <BccTypography type="h2" block mb="46px" align={b.align}>
            {b.title}
          </BccTypography>
        )}
        <Grid
          container
          direction="row"
          className={`${classes.item} ${
            (b.benefitItems.length === 2 || b.benefitItems.length === 4) ? classes.item2 : ""
          }`}
        >
          {b.benefitItems.length > 0 && b.benefitItems.map((i: BenefitItemProps) => (
            <Grid
              container
              justify="space-between"
              direction="row"
              wrap="wrap"
              className={i.image !== "" ? "" : "full"}
            >
              {i.image && (
                <Grid item>
                  <img src={i.image.startsWith('/img/') ? i.image : imgURL + encodeURIComponent(i.image)} />
                </Grid>
              )}
              <Grid item>
                <BccTypography type="h5" block>
                  {i.title}
                </BccTypography>
                {i.image !== "" && (
                  <BccTypography type="p2" block mt="10px">
                    <div className={classes.escapeDiv} dangerouslySetInnerHTML={{ __html: i.content }}/>
                  </BccTypography>
                )}
              </Grid>
              {i.image === "" && (
                <Grid item style={{ width: "100%" }}>
                  <BccTypography type="p2" block mt="10px">
                    <div className={classes.escapeDiv} dangerouslySetInnerHTML={{ __html: i.content} }/>
                  </BccTypography>
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
    ))}</> : <></>
  );
};

export default Benefits;
