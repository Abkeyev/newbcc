import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccCard } from "./BccComponents";
import { CardsPageProps, CardsProps } from "../interfaces";
import api from "../api/Api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        padding: "48px 48px 0",
        boxSizing: "border-box",
        margin: "0 auto",
      },
      cards: {
        marginBottom: 20,
        "& > div": {
          width: "calc(33% - 16px)",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        padding: "48px 48px",
        boxSizing: "border-box",
        margin: "0 auto",
      },
      cards: {
        flexWrap: "wrap",
        marginBottom: 20,
        "& > div": {
          width: "calc(50% - 16px)",
          marginBottom: 12,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      cards: {
        flexWrap: "wrap",
        marginBottom: 20,
        "& > div": {
          width: "100%",
          marginBottom: 12,
        },
      },
      container: {
        padding: 20,
      },
    },
  })
);

const Crediting = () => {
  const classes = useStyles({});
  const [cards, setCards] = React.useState<CardsPageProps>();
  React.useEffect(() => {
    api.main.getCards(window.location.pathname).then((res: CardsPageProps) => {
      setCards(res);
    });
  }, []);

  
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <BccTypography type="h2" block mb="32px">
          Кредитование частных лиц
        </BccTypography>
        <Grid
          container
          justify="space-between"
          wrap="nowrap"
          className={classes.cards}
        >
          {
            cards && cards.withoutCategories.length > 0 && cards.withoutCategories.map((card: CardsProps) => (
              <Grid item>
                <BccCard
                  title={card.card.title}
                  btn={card.buttons}
                  variant={card.card.cardType}
                  img={`http://188.227.84.200:3005/images/${card.card.image}`}
                  chips={card.chips}
                  text={card.card.content}
                  />
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  );
};

export default Crediting;
