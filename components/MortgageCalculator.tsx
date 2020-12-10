import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccInput,
  BccSlider,
  BccButton,
} from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        padding: 48,
        boxSizing: "border-box",
        margin: "0 auto",
      },
      calc: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
      },
      chip: {
        marginBottom: 20,
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
        "& > div": {
          marginRight: 8,
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      calcTitle: {
        marginBottom: 20,
      },
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      calcContent: {
        "& > div:first-child": {
          width: "calc(65% - 12px)",
        },
        "& > div:last-child": {
          width: "calc(35% - 12px)",
          backgroundColor: "#FAFAFA",
          padding: 20,
          borderRadius: 8,
          height: 'fit-content'
        },
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      calcTitleCount: {
        marginBottom: 12,
      },
      cardsText: {
        marginBottom: 20,
        "& > div:first-child": {
          width: "calc(60% - 8px)",
        },
        "& > div:last-child": {
          width: "calc(40% - 8px)",
        },
      },
      calcBtn: {
        marginBottom: 12,
      },
      checkboxText: {
        "& > div": {
          marginRight: 20,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#FAFAFA",
      },
      container: {
        maxWidth: 1280,
        padding: 20,
        boxSizing: "border-box",
        margin: "0 auto",
      },
      calc: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
      },
      chip: {
        marginBottom: 20,
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
        "& > div": {
          marginRight: 8,
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      calcTitle: {
        marginBottom: 20,
      },
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
      calcContent: {
        "& > div:first-child": {
          width: "calc(50% - 12px)",
        },
        "& > div:last-child": {
          width: "calc(50% - 12px)",
          backgroundColor: "#FAFAFA",
          padding: 20,
          borderRadius: 8,
        },
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      calcTitleCount: {
        marginBottom: 12,
      },
      cardsText: {
        marginBottom: 20,
        "& > div:first-child": {
          width: "calc(60% - 8px)",
        },
        "& > div:last-child": {
          width: "calc(40% - 8px)",
        },
      },
      calcBtn: {
        marginBottom: 12,
      },
      checkboxText: {
        "& > div": {
          marginRight: 20,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      calcContent: {
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          marginBottom: 12,
        },
        "& > div:last-child": {
          width: "100%",
        },
      },
    },
  })
);

const MortgageCalculator = () => {
  const classes = useStyles({});
  const [sum, setSum] = React.useState(5000000);
  const [hSum, setHSum] = React.useState(25000000);
  const [period, setPeriod] = React.useState(25);
  const Q = 0.072/12
  return (
    <div className={classes.outerContainer} id="calc">
      <div className={classes.container}>
        <div className={classes.calc}>
          <BccTypography type="h4" block className={classes.calcTitle}>
            Калькулятор
          </BccTypography>
          <Grid
            container
            justify="space-between"
            wrap="nowrap"
            className={classes.calcContent}
          >
            <Grid item>
              <div className={classes.paymentWrap}>
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Стоимость жилья"
                    key="hSum"
                    value={hSum + " ₸"}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) =>
                      +e.target.value.slice(0, -2) > 25000000
                        ? setHSum(25000000)
                        : setHSum(e.target.value.slice(0, -2))
                    }
                    className={classes.input}
                  />
                  <BccSlider
                    style={{
                      left: 6,
                      right: 6,
                      width: "calc(100% - 12px)",
                      bottom: -1,
                      padding: 0,
                      position: "absolute",
                    }}
                    min={0}
                    max={25000000}
                    step={100000}
                    value={hSum}
                    valueLabelDisplay="off"
                    defaultValue={hSum}
                    onChange={(e: any, val: any) => {
                      console.log(e);
                      setHSum(val instanceof Array ? val[1] : val);
                    }}
                  />
                  <div className={classes.sliderRange}>
                    <span>0</span>
                    <span>25 000 000</span>
                  </div>
                </div>
              </div>
              <div className={classes.paymentWrap}>
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Первоначальный взнос"
                    key="sum"
                    value={sum + " ₸"}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) =>
                      +e.target.value.slice(0, -2) > 5000000
                        ? setSum(5000000)
                        : setSum(e.target.value.slice(0, -2))
                    }
                    className={classes.input}
                  />
                  <BccSlider
                    style={{
                      left: 6,
                      right: 6,
                      width: "calc(100% - 12px)",
                      bottom: -1,
                      padding: 0,
                      position: "absolute",
                    }}
                    min={5000000}
                    max={25000000}
                    step={50000}
                    value={sum}
                    valueLabelDisplay="off"
                    defaultValue={sum}
                    onChange={(e: any, val: any) => {
                      console.log(e);
                      setSum(val instanceof Array ? val[1] : val);
                    }}
                  />
                  <div className={classes.sliderRange}>
                    <span>0</span>
                    <span>25 000 000</span>
                  </div>
                </div>
              </div>
              <div className={classes.paymentWrap}>
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Срок займа"
                    key="period"
                    value={period + " мес."}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) =>
                      +e.target.value.slice(0, -5) > 48
                        ? setPeriod(48)
                        : setPeriod(+e.target.value.slice(0, -5))
                    }
                    className={classes.input}
                  />
                  <BccSlider
                    style={{
                      left: 6,
                      right: 6,
                      width: "calc(100% - 12px)",
                      bottom: -1,
                      padding: 0,
                      position: "absolute",
                    }}
                    min={12}
                    max={300}
                    step={1}
                    value={period}
                    valueLabelDisplay="off"
                    defaultValue={sum}
                    onChange={(e: any, val: any) => {
                      console.log(e);
                      setPeriod(val instanceof Array ? val[1] : val);
                    }}
                  />
                  <div className={classes.sliderRange}>
                    <span>12</span>
                    <span>300</span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item>
              <BccTypography type="h5" block className={classes.calcTitleCount}>
                Расчёт
              </BccTypography>
              <Grid
                container
                justify="space-between"
                className={classes.cardsText}
              >
                <Grid item>
                  <BccTypography type="p4" block>
                    Ежемесячный платёж
                  </BccTypography>
                  <BccTypography type="p3" weight="medium" block>
                    ~ {Math.round((hSum - sum)*((Q * Math.pow((1+Q), 120))/(Math.pow((1+Q), 120) - 1)))} ₸
                  </BccTypography>
                </Grid>
                <Grid item>
                  <BccTypography type="p4" block>
                    Ствка
                  </BccTypography>
                  <BccTypography type="p3" weight="medium" block>
                    7.2%
                  </BccTypography>
                </Grid>
              </Grid>
              <BccButton
                variant="contained"
                fullWidth
                color="primary"
                className={classes.calcBtn}
                href="#order"
              >
                Оформить ипотеку
              </BccButton>
              <BccTypography type="p4" block>
                *Данные предварительные
              </BccTypography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;