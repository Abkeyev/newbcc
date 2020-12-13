import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";
import { CategoryProps, CardsProps, CardsPageProps, imgURL } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        padding: "48px",
        boxSizing: "border-box",
        margin: "0 auto",
      },
      title: {
        marginRight: 20,
      },
      cardsText: {
        "& > div": {
          width: "calc(50% - 8px)",
        },
      },
      cardsTitle: {
        marginBottom: 32,
      },
      cards: {
        marginBottom: 20,
        "& > div": {
          marginBottom: 20,
          marginRight: 20,
          width: "calc(33% - 12px)",
        },
        "& > div:nth-child(3n)": {
          marginRight: 0
        },
      },
      cardsSecond: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
      titleChip: {
        "& > div": {
          marginRight: 16,
        },
        "& > span:last-child": {
          marginRight: 0,
        },
      },
      link: {
        color: "#00A755",
        textDecoration: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      cards: {
        "& > div": {
          width: "calc(50% - 12px)",
        },
      },
      titleChip: {
        marginTop: 12,
        display: "flex",
        flexWrap: "nowrap",
        overflow: "scroll",
        width: "max-content",
        "& > span": {
          whiteSpace: "nowrap",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        padding: 20,
      },
      cards: {
        "& > div": {
          width: "100%",
          marginRight: 0
        },
      },
    },
  })
);

interface BestProps {
  cards: CardsPageProps;
  title: string;
}

const Best = (props: BestProps) => {
  const { cards, title } = props
  const [selected, setSelected] = React.useState<CategoryProps | null>(null);
  const classes = useStyles({});
  
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <Grid
          container
          justify="flex-start"
          wrap="wrap"
          alignItems="center"
          className={classes.cardsTitle}
        >
          <Grid item>
            <BccTypography
              type="h2"
              block
              className={classes.title}
            >
              {title}
            </BccTypography>
          </Grid>
          <Grid item className={classes.titleChip}>
            <BccChip
              type={selected === null ? "contained" : "outlined"}
              color="secondary"
              onClick={() => setSelected(null)}
              mr={"16px"}
            >
              Все
            </BccChip>
            {cards.withCategories.length > 0 &&
              (cards.withCategories as CategoryProps[]).map((c: CategoryProps, index: number) => (
                <BccChip
                  type={selected !== null && c.categoryId === selected.categoryId ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setSelected(c)}
                  mr={index === cards.withCategories.length - 1 ? "0" : "16px"}
                >
                  {c.name}
                </BccChip>
              ))}
          </Grid>
        </Grid>
        <Grid
          container
          wrap="wrap"
          className={classes.cards}
        >
          {selected === null ? (
            (cards.withCategories as CategoryProps[]).map((c: CategoryProps) => 
            (c.cards as CardsProps[]).map((cc: CardsProps) => (
              <Grid item>
                <BccCard
                  title={cc.card.title}
                  btn={cc.buttons}
                  variant={cc.card.cardType}
                  img={`${imgURL}${encodeURIComponent(cc.card.image)}`}
                  chips={cc.chips}
                  text={cc.card.content}
                />
              </Grid>
            )))
          ) : ((selected.cards as CardsProps[]).map((cc: CardsProps) => (
                <Grid item>
                  <BccCard
                    title={cc.card.title}
                    btn={cc.buttons}
                    variant={cc.card.cardType}
                    img={`${imgURL}${encodeURIComponent(cc.card.image)}`}
                    chips={cc.chips}
                    text={cc.card.content}
                  />
                </Grid>
              )))}
        </Grid>
      </div>
    </div>
  );
};

export default Best;
