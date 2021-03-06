import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccCard } from "./BccComponents";
import { CardsPageProps, CardsProps, imgURL } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      title: {
        marginBottom: 32,
      },
      cardsText: {
        "& > div": {},
      },
      cards: {
        marginBottom: 20,
        "& > div": {
          width: "calc(33% - 16px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      title: {
        marginBottom: 32,
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cards: {
        marginBottom: 20,
        "& > div": {
          width: "calc(33% - 8px)",
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "48px 48px 32px",
      },
      cards: {
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: 0,
        "& > div:nth-child(2n + 1)": {
          marginRight: 16,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "80%",
          maxWidth: 400,
        },
        "& > div": {
          width: "calc(50% - 8px)",
          marginBottom: 16,
        },
      },
      cardsSecond: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          marginBottom: 16,
        },
        "& > div:last-child": {
          marginBottom: 0,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      cards: {
        "& > div": {
          width: "100%",
          marginRight: 0,
          maxWidth: "none",
        },
        "& > div:nth-child(2n + 1)": {
          marginRight: 0,
        },
        "& > div:last-child": {
          marginRight: 0,
          width: "100%",
          maxWidth: "none",
        },
      },
      title: {
        marginBottom: 20,
      },
    },
  })
);

interface FeaturedProps {
  cards?: CardsPageProps;
  title: string;
}

const Featured = (props: FeaturedProps) => {
  const { cards, title } = props
  const classes = useStyles({});

  const cardsList = (type: string) => {
    if (cards && cards.withoutCategories && cards.withoutCategories.length > 0) {
      return cards.withoutCategories.filter(
        (c: CardsProps) => c.card.cardType === type
      );
    } else return [];
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block className={classes.title}>
        {title}
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          {cardsList("vertical").map((card: CardsProps, index: number) => index < 3 && (
            <Grid item>
              <BccCard
                title={card.card.title}
                btn={card.buttons}
                variant={card.card.cardType}
                img={card.card.image.startsWith('/img/') ? card.card.image : `${imgURL}${encodeURIComponent(card.card.image)}`}
                chips={card.chips}
                text={card.card.content}
              />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cardsSecond}
        >
          {cardsList("horizontal").map((card: CardsProps, index: number) => (
            <Grid item key={`cardFeatureHorizontal${index}`}>
              <BccCard
                title={card.card.title}
                btn={card.buttons}
                variant={card.card.cardType}
                img={card.card.image.startsWith('/img/') ? card.card.image : `${imgURL}${encodeURIComponent(card.card.image)}`}
                chips={card.chips}
                text={card.card.content}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Featured;
