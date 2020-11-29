import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, InputAdornment } from "@material-ui/core";
import {
  BccTypography,
  BccInput,
  BccBreadcrumbs,
  BccButton,
  BccLink,
} from "../../components/BccComponents";
import { Tabs } from "../../components";
import MaskedInput from "react-maskedinput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        position: "relative",
        backgroundColor: "white",
        padding: "16px 0",
        boxSizing: "border-box",
        marginTop: 16,
        paddingBottom: 16,
        "& > nav": {
          maxWidth: 1280,
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "0 48px",
        },
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 48px",
        boxSizing: "border-box",
      },
      fromCard: {
        padding: 24,
        backgroundColor: "#F3F3F3",
        borderRadius: 16,
        minHeight: 180,
        textAlign: "left",
      },
      toCard: {
        padding: 24,
        backgroundColor: "#F3F3F3",
        borderRadius: 16,
        minHeight: 180,
      },
      inputStyle: {
        marginTop: 12,
        marginBottom: 16,
        display: "block",
        "& > div": {
          minWidth: 350,
        },
      },
      inputStyleDate: {
        minWidth: 120,
        marginRight: 16,
      },
      arrowIcon: {
        margin: "10% 16px",
      },
      cardWrap: {
        textAlign: "right",
      },
      sumWrap: {
        textAlign: "left",
        width: "60%",
        marginLeft: "auto",
        marginTop: "32px",
        "& > div": {
          width: "100%",
        },
      },
      btnWrap: {
        textAlign: "left",
        width: "100%",
        marginRight: "auto",
        marginTop: "32px",
        "& > div": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        position: "relative",
        backgroundColor: "white",
        padding: "16px 0",
        boxSizing: "border-box",
        marginTop: 16,
        paddingBottom: 16,
        "& > nav": {
          maxWidth: 1280,
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "0 48px",
        },
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px",
        boxSizing: "border-box",
      },
      fromCard: {
        padding: 16,
        backgroundColor: "#F3F3F3",
        borderRadius: 16,
        minHeight: 180,
        textAlign: "left",
      },
      toCard: {
        padding: 16,
        backgroundColor: "#F3F3F3",
        borderRadius: 16,
        minHeight: 180,
      },
      inputStyle: {
        marginTop: 12,
        marginBottom: 16,
        display: "block",
        "& > div": {
          minWidth: "100%",
        },
      },
      inputStyleDate: {
        minWidth: "auto",
        width: "calc(50% - 8px)",
        marginRight: 16,
      },
      inputStyleDate2: {
        minWidth: "auto",
        width: "calc(50% - 8px)",
      },
      arrowIcon: {
        margin: "14% 8px",
      },
      cardWrap: {
        textAlign: "right",
        width: "calc(50% - 20px)",
      },
      cardWrap2: {
        width: "calc(50% - 20px)",
      },
      sumWrap: {
        textAlign: "left",
        width: "60%",
        marginLeft: "auto",
        marginTop: "32px",
        "& > div": {
          width: "100%",
        },
      },
      btnWrap: {
        textAlign: "left",
        width: "100%",
        marginRight: "auto",
        marginTop: "32px",
        "& > div": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      cardWrap: {
        textAlign: "right",
        width: "100%",
      },
      cardWrap2: {
        width: "100%",
      },
      wrapCrd: {
        flexWrap: "wrap",
      },
      arrowIcon: {
        margin: "12px auto",
        transform: "rotate(90deg)",
      },
      sumWrap: {
        width: "100%",
        marginLeft: "0",
        marginTop: "12px",
      },
      btnWrap: {
        width: "100%",
        marginTop: "12px",
      },
      arrowIcon2: {
        display: "none",
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const CardNumberMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="1111 1111 1111 1111"
      placeholder={"____ ____ ____ ____"}
    />
  );
};

const CardPeriodMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="11/1111"
      placeholder={"__/____"}
    />
  );
};

const CardCvvMask = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="111"
      placeholder={"___"}
    />
  );
};

const p2pPage = () => {
  const classes = useStyles({});
  const [cardNumber, setCardNumber] = React.useState("5104 4559 8990 0964");
  const [cardPeriod, setCardPeriod] = React.useState("02/2020");
  const [cardCvv, setCardCvv] = React.useState("283");
  const [sum, setSum] = React.useState(5000);

  return (
    <Layout title="P2P Переводы">
      <div className="main-page">
        <div className="container">
          <div className={classes.container}>
            <BccBreadcrumbs>
              <BccTypography type="p3" td="underline">
                Переводы
              </BccTypography>
              <BccTypography type="p3">Переводы с карты на карту</BccTypography>
            </BccBreadcrumbs>
            <div className={classes.innerContainer}>
              <BccTypography type="h1" align="center" block mt="42px" mb="20px">
                Переводы с карты на карту
              </BccTypography>
              <BccTypography
                type="p1"
                align="center"
                block
                color="#4D565F"
                mb="48px"
              >
                Мгновенный перевод денег между картами любых банков
              </BccTypography>
              <Grid
                container
                justify="center"
                wrap="nowrap"
                className={classes.wrapCrd}
              >
                <Grid item className={classes.cardWrap}>
                  <div className={classes.fromCard}>
                    <Grid
                      container
                      justify="space-between"
                      wrap="nowrap"
                      alignItems="center"
                    >
                      <Grid item>
                        <BccTypography type="p2">С карты</BccTypography>
                      </Grid>
                      <Grid item>
                        <img src={"/img/logo-icon.svg"} />
                      </Grid>
                    </Grid>
                    <BccInput
                      label="Номер карты"
                      variant="filled"
                      onChange={(e: any) => setCardNumber(e.target.value)}
                      className={classes.inputStyle}
                      id="cardNumber"
                      name="cardNumber"
                      value={cardNumber}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: CardNumberMask as any,
                        endAdornment: (
                          <InputAdornment position="end">
                            <img src={"/img/visa.svg"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <BccInput
                      label="Срок действия"
                      variant="filled"
                      onChange={(e: any) => setCardPeriod(e.target.value)}
                      id="cardPeriod"
                      className={classes.inputStyleDate}
                      name="cardPeriod"
                      value={cardPeriod}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: CardPeriodMask as any,
                      }}
                    />
                    <BccInput
                      label="CVC2/CVV2"
                      variant="filled"
                      onChange={(e: any) => setCardCvv(e.target.value)}
                      id="cardCvv"
                      className={classes.inputStyleDate2}
                      name="cardCvv"
                      value={cardCvv}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: CardCvvMask as any,
                      }}
                    />
                  </div>
                </Grid>
                <Grid item className={classes.arrowIcon}>
                  <img src={"/img/icons/arrow-right.svg"} />
                </Grid>
                <Grid item className={classes.cardWrap2}>
                  <div className={classes.fromCard}>
                    <Grid
                      container
                      justify="space-between"
                      wrap="nowrap"
                      alignItems="center"
                    >
                      <Grid item>
                        <BccTypography type="p2">На карту</BccTypography>
                      </Grid>
                      <Grid item>
                        <img src={"/img/logo-alfa.svg"} />
                      </Grid>
                    </Grid>
                    <BccInput
                      label="Номер карты"
                      variant="filled"
                      onChange={(e: any) => setCardNumber(e.target.value)}
                      className={classes.inputStyle}
                      id="cardNumber"
                      name="cardNumber"
                      value={cardNumber}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: CardNumberMask as any,
                        endAdornment: (
                          <InputAdornment position="end">
                            <img src={"/img/visa.svg"} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
              <Grid
                container
                justify="center"
                wrap="nowrap"
                className={classes.wrapCrd}
              >
                <Grid item className={classes.cardWrap}>
                  <div className={classes.sumWrap}>
                    <BccInput
                      label="Сумма перевода, ₸"
                      variant="filled"
                      onChange={(e: any) => setSum(e.target.value)}
                      id="sum"
                      name="sum"
                      value={sum}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <BccTypography type="p4" block mt="12px">
                      Комиссия: 200 ₸
                    </BccTypography>
                  </div>
                </Grid>
                <Grid item className={classes.arrowIcon2}>
                  <img
                    src={"/img/icons/arrow-right.svg"}
                    style={{ opacity: "0" }}
                  />
                </Grid>
                <Grid item className={classes.cardWrap2}>
                  <div className={classes.btnWrap}>
                    <BccButton variant="contained" color="primary">
                      Перевести 5200 ₸
                    </BccButton>
                    <BccTypography type="p4" block mt="12px">
                      Нажимая «Перевести» соглашаюсь на{" "}
                      <BccLink href="">условия переводов</BccLink>
                    </BccTypography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>

          <Tabs />
        </div>
      </div>
    </Layout>
  );
};
export default p2pPage;
