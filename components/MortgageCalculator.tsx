import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccInput,
  BccSlider,
  BccButton,
} from "./BccComponents";
import { CalcProps } from '../interfaces';

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
        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)',
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
        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)',
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

interface MortgageCalculatorProps {
  calc: CalcProps[];
}

const MortgageCalculator = (props: MortgageCalculatorProps) => {
  const { calc } = props;
  const classes = useStyles({});
  const [sum, setSum] = React.useState("");
  const [hSum, setHSum] = React.useState("");
  const [period, setPeriod] = React.useState("");
  const [rate, setRate] = React.useState(0);
  React.useEffect(() => {
    if(calc.length > 0 && calc[0]) {
      setSum(calc[0].firstPayDefault.toString())
      setHSum(calc[0].sumDefault.toString())
      setPeriod(calc[0].periodDefault.toString())
      setRate(calc[0].rate/100)
    }
  }, [])
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
                    value={`${hSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${hSum !== "" ? " ₸" : ""}`}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) => {
                      const s = +e.target.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                      if (s > calc[0].sumMax) setHSum(calc[0].sumMax.toString())
                      else setHSum(s.toString())
                    }}
                    onFocus={() => setHSum("")}
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
                    min={calc[0] && calc[0].sumMin}
                    max={calc[0] && calc[0].sumMax}
                    step={500000}
                    value={+hSum}
                    valueLabelDisplay="off"
                    defaultValue={calc[0] && calc[0].sumDefault}
                    onChange={(e: any, val: any) => {
                      console.log(e);
                      setHSum(val instanceof Array ? val[1] : val);
                    }}
                  />
                  <div className={classes.sliderRange}>
                    <span>{calc[0] && calc[0].sumMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                    <span>{calc[0] && calc[0].sumMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                  </div>
                </div>
              </div>
              <div className={classes.paymentWrap}>
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Первоначальный взнос"
                    key="sum"
                    value={`${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}${sum !== "" ? " ₸" : ""}`}
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(e: any) => {
                      const s = +e.target.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                      if (s > calc[0].firstPayMax) setSum(calc[0].firstPayMax.toString())
                      else setSum(s.toString())
                    }}
                    onFocus={() => setSum("")}
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
                    min={calc[0] && calc[0].firstPayMin}
                    max={calc[0] && calc[0].firstPayMax}
                    step={50000}
                    value={+sum}
                    valueLabelDisplay="off"
                    defaultValue={calc[0] && calc[0].firstPayDefault}
                    onChange={(e: any, val: any) => {
                      console.log(e);
                      setSum(val instanceof Array ? val[1] : val);
                    }}
                  />
                  <div className={classes.sliderRange}>
                    <span>{calc[0] && calc[0].firstPayMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                    <span>{calc[0] && calc[0].firstPayMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                  </div>
                </div>
              </div>
              <div className={classes.paymentWrap}>
                <div className={classes.sliderWrap}>
                  <BccInput
                    label="Срок займа"
                    key="period"
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={`${period}${period !== "" ? " мес." : ""}`}
                    onChange={(e: any) => {
                      const s = +e.target.value.replace(
                        /[^0-9]/g,
                        ""
                      );
                      if (s > calc[0].periodMax) setPeriod(calc[0].periodMax.toString())
                      else setPeriod(s.toString())
                    }}
                    onFocus={() => setPeriod("")}
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
                    min={calc[0] && calc[0].periodMin}
                    max={calc[0] && calc[0].periodMax}
                    step={1}
                    value={+period}
                    valueLabelDisplay="off"
                    defaultValue={calc[0] && calc[0].periodDefault}
                    onChange={(e: any, val: any) => {
                      console.log(e);
                      setPeriod(val instanceof Array ? val[1] : val);
                    }}
                  />
                  <div className={classes.sliderRange}>
                    <span>{calc[0] && calc[0].periodMin.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                    <span>{calc[0] && calc[0].periodMax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
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
                    {console.log(+hSum, 'hs')}
                    {console.log(+sum, 's')}
                    {console.log(rate, 'r')}
                    {console.log(period, 'p')}
                    {console.log(Math.round((+hSum - +sum)*(((rate/12) * Math.pow((1+(rate/12)), +period))/(Math.pow((1+(rate/12)), +period) - 1))), 'f')}
                    ~ {Math.round((+hSum - +sum)*(((rate/12) * Math.pow((1+(rate/12)), +period))/(Math.pow((1+(rate/12)), +period) - 1)))} ₸
                  </BccTypography>
                </Grid>
                <Grid item>
                  <BccTypography type="p4" block>
                    Ствка
                  </BccTypography>
                  <BccTypography type="p3" weight="medium" block>
                    {calc[0] && calc[0].rate}%
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
