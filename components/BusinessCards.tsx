import React from "react";
import { Grid } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Link from "next/link";
import { BccTypography, BccChip, BccButton, BccLink } from "./BccComponents";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { CardsFullProps, ChipProps, ButtonProps } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("xl")]: {
      outerContainer: {
        backgroundColor: "#FFFFFF",
      },
      container: {
        maxWidth: 1280,
        padding: "64px 48px 112px",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },

      cardsWrap: {
        width: "100%",
        overflowX: "hidden",
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
      cards: {
        width: "calc(1184px * 3)",
        transition: "all .7s ease",
        "& > div": {
          width: 1184,
          padding: 10,
        },
      },
      card: {
        padding: "30px 60px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #CCCFD1",
        borderRadius: 8,
        "& > div:first-child": {
          width: "30%",
          "& > img": {
            width: "95%",
            [theme.breakpoints.down("md")]: {
              marginBottom: 10,
            },
          },
        },
        "& > div:nth-child(2)": {
          width: "70%",
        },
      },
      cardsTable: {
        width: "80%",
        marginBottom: 30,
        "& > div": {
          width: "calc(33% - 20px)",
        },
      },
      orderBtn: {
        marginRight: 16,
        minWidth: 280,
        '& a': {
          color: 'inherit',
          textDecoration: 'inherit',
          fontWeight: 'inherit'
        }
      },
      usefulHead: {
        marginBottom: 32,
      },
    },
    [theme.breakpoints.down("md")]: {
      cards: {
        width: "calc((100vw - 96px) * 3)",
        transition: "all .7s ease",
        "& > div": {
          width: "calc(100vw - 96px)",
          padding: 10,
        },
      },
      card: {
        padding: 20,
      },
      orderBtn: {
        marginRight: 16,
        minWidth: 200,
      },
    },
    [theme.breakpoints.down("sm")]: {
      cardsTable: {
        display: "none",
      },
      orderBtn: {
        minWidth: 100,
      },
      card: {
        "& > div:first-child": {
          width: "25%",
        },
        "& > div:nth-child(2)": {
          width: "75%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      cards: {
        width: "calc((100vw - 48px) * 3)",
        transition: "all .7s ease",
        "& > div": {
          width: "calc(100vw - 48px)",
        },
      },
      cardsTable: {
        display: "flex",
      },
      orderBtn: {
        minWidth: "auto",
        width: "100%",
        marginBottom: 12,
      },
      card: {
        "& > div:first-child": {
          width: "100%",
          textAlign: "center",
          "& > img": {
            width: "80%",
          },
        },
        "& > div:nth-child(2)": {
          width: "100%",
        },
      },
    },
    chip: {
      marginRight: 8
    },
    textInner: {}
  })
);

interface BusinessCardsProps {
  cardsFull: CardsFullProps[];
}

const BusinessCards = (props: BusinessCardsProps) => {
  const { cardsFull } = props
  const classes = useStyles({});
  const [slide, setSlide] = React.useState(0);
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.down("xl"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const xs = useMediaQuery(theme.breakpoints.down("xs"));
  
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
    if (xs) return `calc((100vw - 48px) * ${slide * -1})`;
    else if (sm) return `calc((100vw - 96px) * ${slide * -1})`;
    else if (md) return `calc((100vw - 96px) * ${slide * -1})`;
    else if (xl) return `-${1184 * slide}px`;
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
            <BccTypography type="h2" block>
              Бизнес-карты
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </Grid>
        </Grid>
        <div className={classes.sliderSteps}>
          {cardsFull.length > 0 &&
            (cardsFull as CardsFullProps[]).map((c: CardsFullProps, index: number) => {
              return (
                <div
                  key={`businessCard${c.card.id}`}
                  className={`${classes.sliderStep} ${
                    slide === index ? classes.active : ""
                  }`}
                  onClick={() => setSlide(index)}
                ></div>
              );
            })}
        </div>
        {
          cardsFull.length > 0 && (cardsFull as CardsFullProps[]).map((c: CardsFullProps) => {c.card.title})
        }
        <div className={classes.cardsWrap}>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            className={classes.cards}
            style={{ marginLeft: marginLeft() }}
          >
            {(cardsFull as CardsFullProps[]).map((c: CardsFullProps) => {
                return (<Grid item>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={classes.card}
                  >
                    <Grid item>
                      <img
                        src={
                          "http://188.227.84.200:3005/images/" + c.card.image
                        }
                        alt={c.card.title}
                      />
                    </Grid>
                    <Grid item>
                      {c.chips.length > 0 &&
                        c.chips.map((chip: ChipProps) => (
                          <BccChip
                            id={`businessCardChip${chip.id}`}
                            type={chip.type}
                            color="secondary"
                            className={classes.chip}
                            mb="16px"
                          >
                            {chip.title}
                          </BccChip>
                        ))}
                      <BccTypography block type="h3" mb="16px">
                        {c.card.title}
                      </BccTypography>
                      <BccTypography block type="p2" mb="16px">
                        {c.card.subtitle}
                      </BccTypography>
                      <div className={classes.textInner} dangerouslySetInnerHTML={{ __html: c.card.content }} />
                      {c.buttons.length > 0 &&
                        c.buttons.map((b: ButtonProps) => (
                          <BccButton
                            variant={b.buttonType}
                            color={b.buttonColor}
                            className={classes.orderBtn}
                          >
                            {b.buttonLink.startsWith("https://") ? (
                              <BccLink
                                href={b.buttonLink}
                                style={{
                                  color: "inherit",
                                  textDecoration: "none",
                                }}
                              >
                                {b.buttonText}
                              </BccLink>
                            ) : (
                              <Link
                                href={
                                  b.buttonLink !== undefined
                                    ? `${b.buttonLink}`
                                    : ""
                                }
                              >
                                {b.buttonText}
                              </Link>
                            )}
                          </BccButton>
                        ))}
                    </Grid>
                  </Grid>
                </Grid>)
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;
