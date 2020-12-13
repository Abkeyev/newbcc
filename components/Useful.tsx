import React from "react";
import { Grid } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { BccTypography, BccCard } from "./BccComponents";
import { CardsPageProps, CardsProps, imgURL } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        padding: "64px 48px 96px",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
      },
      title: {},
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cardsWrap: {
        width: "100%",
        overflowX: "hidden",
      },
      cards: {
        width: "calc((380px * 5) + (4 * 22px))",
        marginBottom: 24,
        marginLeft: 0,
        transition: "margin-left .5s ease-in-out",
        "& > div": {
          marginRight: 22,
          width: 380,
          padding: 10,
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      leftArrow: {
        position: "relative",
        height: 40,
        width: 40,
        borderRadius: "50%",
        marginRight: 20,
        border: "1px solid #4D565F",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "42px",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#4D565F",
          "& > svg > path": {
            stroke: "white",
          },
        },
        "& > svg": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "& > path": {
            stroke: "#4D565F",
          },
        },
      },
      rightArrow: {
        position: "relative",
        height: 40,
        width: 40,
        borderRadius: "50%",
        border: "1px solid #4D565F",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "42px",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#4D565F",
          "& > svg > path": {
            stroke: "white",
          },
        },
        "& > svg": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "& > path": {
            stroke: "#4D565F",
          },
        },
      },
      usefulHead: {
        marginBottom: 32,
      },
      sliderSteps: {
        position: "absolute",
        bottom: 64,
        width: 62,
        left: "calc(50% - 31px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
        "& > div": {
          cursor: "pointer",
          width: 10,
          marginRight: 16,
          height: 10,
          borderRadius: "50%",
          boxSizing: "border-box",
          border: "1px solid #4D565F",
          "&:hover": {
            backgroundColor: "#4D565F",
          },
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      active: {
        backgroundColor: "#4D565F",
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        padding: "64px 48px 96px",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
      },
      title: {},
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cardsWrap: {
        width: "100%",
        overflowX: "hidden",
      },
      cards: {
        width: "calc((((100vw - 120px) / 3) * 5) + (4 * 12px))",
        marginBottom: 24,
        marginLeft: 0,
        transition: "margin-left .5s ease-in-out",
        "& > div": {
          marginRight: 12,
          width: "calc((100vw - 120px) / 3)",
          padding: 10,
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      leftArrow: {
        position: "relative",
        height: 40,
        width: 40,
        borderRadius: "50%",
        marginRight: 20,
        border: "1px solid #4D565F",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "42px",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#4D565F",
          "& > svg > path": {
            stroke: "white",
          },
        },
        "& > svg": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "& > path": {
            stroke: "#4D565F",
          },
        },
      },
      rightArrow: {
        position: "relative",
        height: 40,
        width: 40,
        borderRadius: "50%",
        border: "1px solid #4D565F",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "42px",
        boxSizing: "border-box",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#4D565F",
          "& > svg > path": {
            stroke: "white",
          },
        },
        "& > svg": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          "& > path": {
            stroke: "#4D565F",
          },
        },
      },
      usefulHead: {
        marginBottom: 32,
      },
      sliderSteps: {
        position: "absolute",
        bottom: 64,
        width: 62,
        left: "calc(50% - 31px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
        "& > div": {
          cursor: "pointer",
          width: 10,
          marginRight: 16,
          height: 10,
          borderRadius: "50%",
          boxSizing: "border-box",
          border: "1px solid #4D565F",
          "&:hover": {
            backgroundColor: "#4D565F",
          },
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      active: {
        backgroundColor: "#4D565F",
      },
    },
    [theme.breakpoints.down("sm")]: {
      cards: {
        width: "calc((((100vw - 108px) / 2) * 5) + (4 * 12px))",
        "& > div": {
          marginRight: 12,
          width: "calc((100vw - 108px) / 2)",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: 20,
        paddingBottom: 56,
      },
      cards: {
        width: "calc((((100vw - 48px)) * 5) + (4 * 12px))",
        marginBottom: 34,
        marginLeft: 0,
        transition: "margin-left .5s ease-in-out",
        "& > div": {
          marginRight: 12,
          width: "calc((100vw - 48px))",
          padding: 10,
        },
      },
    },
  })
);

interface UserfulProps {
  cards?: CardsPageProps;
}

const Useful = (props: UserfulProps) => {
  const classes = useStyles({});
  const [slide, setSlide] = React.useState(0);
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const lg = useMediaQuery(theme.breakpoints.down("lg"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const vSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const { cards } = props;
  
  const cardsList = () => {
    if (cards && cards.slider.length > 0) {
      return cards.slider;
    } else return [];
  };

  const slideArrow = (isNext: boolean) => {
    if (isNext) {
      if (slide + 1 === 3) {
        setSlide(0);
      } else {
        setSlide(slide + 1);
      }
    } else {
      if (slide - 1 === -1) {
        setSlide(2);
      } else {
        setSlide(slide - 1);
      }
    }
  };

  const marginLeft = () => {
    if (vSmall) return `calc(((100vw - 48px) + 12px) * ${slide * -1})`;
    else if (small) return `calc(((100vw - 108px) + 24px) * ${slide * -1})`;
    else if (md) return `calc(((100vw - 120px) / 3 + 12px) * ${slide * -1})`;
    else if (lg || xl) return `-${402 * slide}px`;
    else return 0;
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          alignItems="center"
          className={classes.usefulHead}
        >
          <Grid item>
            <BccTypography type="h2" block className={classes.title}>
              Полезное
            </BccTypography>
          </Grid>
          <Grid item>
            <span
              className={classes.leftArrow}
              onClick={() => slideArrow(false)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.59985 1.59998L1.19985 7.99998L7.59985 14.4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={classes.rightArrow}
              onClick={() => slideArrow(true)}
            >
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40009 14.4L7.80009 8.00002L1.40009 1.60002"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Grid>
        </Grid>

        <div className={classes.sliderSteps}>
          {(cardsList() as CardsProps[]).map((step: any, index: number) => {
            return (
              <div
                key={`key${step.title}`}
                className={`${classes.sliderStep} ${
                  slide === index ? classes.active : ""
                }`}
                onClick={() => setSlide(index)}
              ></div>
            );
          })}
        </div>
        <div className={classes.cardsWrap}>
          <Grid
            container
            justify="flex-start"
            wrap="nowrap"
            className={classes.cards}
            style={{ marginLeft: marginLeft() }}
          >
            {(cardsList() as CardsProps[]).map((card: CardsProps, index: number) => (
              <Grid item key={`cardFeatureVertical${index}`}>
                <BccCard
                  title={card.card.title}
                  btn={card.buttons}
                  variant={card.card.cardType}
                  img={`${imgURL}${encodeURIComponent(card.card.image)}`}
                  chips={card.chips}
                  text={card.card.content}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Useful;
