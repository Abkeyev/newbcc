import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";
import { CategoryProps, CardsProps, CardsPageProps } from "../interfaces";
import api from "../api/Api";

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
        marginRight: 24,
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
        marginBottom: 24,
        "& > div": {
          marginBottom: 24,
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
        color: "#27AE60",
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
        padding: 24,
      },
      cards: {
        "& > div": {
          width: "100%",
        },
      },
    },
  })
);


const Featured = () => {
  const [selected, setSelected] = React.useState<CategoryProps | null>(null);
  const [cards, setCards] = React.useState<CategoryProps[] | []>([]);
  const classes = useStyles({});

  React.useEffect(() => {
    api.main.getCards(window.location.pathname).then((res: CardsPageProps) => {
      setCards(res.withCategories);
      res.withCategories.length > 0 && setSelected(res.withCategories[0])
    });
  }, [])
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
              Лучшее от банка
            </BccTypography>
          </Grid>
          <Grid item className={classes.titleChip}>
            {cards.length > 0 &&
              (cards as CategoryProps[]).map((c: CategoryProps, index: number) => (
                <BccChip
                  type={selected !== null && c.categoryId === selected.categoryId ? "contained" : "outlined"}
                  color="secondary"
                  onClick={() => setSelected(c)}
                  mr={index === cards.length - 1 ? "0" : "16px"}
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
          {selected !== null &&
            (selected.cards as CardsProps[]).map((cc: CardsProps) => (
                <Grid item>
                  <BccCard
                    title={cc.card.title}
                    btn={cc.buttons}
                    variant={cc.card.cardType}
                    img={`http://188.227.84.200:3005/images/${cc.card.image}`}
                    chips={cc.chips}
                    text={cc.card.content}
                  />
                </Grid>
              ))}
        </Grid>
      </div>
    </div>
  );
};

export default Featured;
