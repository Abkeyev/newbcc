import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccInput,
  BccSlider,
  BccButton,
  BccCheckbox,
} from "./BccComponents";
import { useTranslation } from 'react-i18next';

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
      calc: {
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
      },
      chip: {
        marginBottom: 20,
        "& > div": {
          marginRight: 8,
        },
        "& > div:last-child": {
          marginRight: 0,
        },
      },
      currencyBlock: {
        "& > p": {
          marginBottom: 16,
          color: "#141414",
        },
        "& > p:fist-child": {
          color: "#80868C",
        },
      },
      widgetContainer: {
        "& > div:first-child": {
          width: "calc(65% - 12px)",
        },
        "& > div:last-child": {
          width: "calc(35% - 12px)",
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
          width: "calc(60% - 12px)",
        },
        "& > div:last-child": {
          width: "calc(40% - 12px)",
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
      currency: {
        "& > p:first-child": {
          marginBottom: 16,
        },
      },
      checkboxText: {
        "& > div": {
          marginRight: 20,
        },
      },
      card: {
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: 'white',
        flexDirection: "column",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        overflow: "hidden",
        "& > div:first-child": {
          backgroundPositionX: "center",
        },
      },
      contentCard: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      title: {
        marginBottom: 16,
      },
      text: {
        marginBottom: 20,
      },
    },
    [theme.breakpoints.down("md")]: {
      calcContent: {
        "& > div:first-child": {
          width: "calc(50% - 8px)",
        },
        "& > div:last-child": {
          width: "calc(50% - 8px)",
          backgroundColor: "#FAFAFA",
          padding: 16,
          borderRadius: 8,
        },
      },
      card: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'white',
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        overflow: "hidden",
        "& > div:first-child": {
          backgroundPositionX: "center",
        },
      },
      contentCard: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      title: {
        marginBottom: 16,
      },
      text: {
        marginBottom: 20,
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        padding: "0 48px 32px",
      },
      widgetContainer: {
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          marginBottom: 16,
        },
        "& > div:last-child": {
          width: "100%",
        },
      },
      chip: {
        display: "flex",
        flexWrap: "nowrap",
        overflow: "scroll",
        width: "max-content",
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      calc: {
        "& > div:nth-child(2)": {
          width: "inherit",
          overflowX: "scroll",
          marginBottom: 16,
        },
      },
      chip: {
        width: "max-content",
        marginBottom: 0,
        overflowX: "auto",
        overflowY: "auto",
        "& > span": {
          marginBottom: "6px!important",
          marginRight: "6px!important",
        },
      },
      calcContent: {
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
        },
        "& > div:last-child": {
          width: "100%",
          marginBottom: 16,
        },
      },
    },
  })
);

const marks = [{
  value: 0,
  label: ''
}, {
  value: 6,
  label: ''
}, {
  value: 9,
  label: ''
}, {
  value: 12,
  label: ''
}, {
  value: 18,
  label: ''
}, {
  value: 24,
  label: ''
}, {
  value: 36,
  label: ''
}, {
  value: 48,
  label: ''
}, {
  value: 60,
  label: ''
},]

const data = [{
  id: 0,
  percent: 0,
  percentZP: 0,
  period: 0
}, {
  id: 1,
  percent: 1,
  percentZP: 0.8,
  period: 6
}, {
  id: 2,
  percent: 6,
  percentZP: 4,
  period: 9
}, {
  id: 3,
  percent: 11,
  percentZP: 9,
  period: 12
}, {
  id: 4,
  percent: 15,
  percentZP: 13,
  period: 18
}, {
  id: 5,
  percent: 17,
  percentZP: 15,
  period: 24
}, {
  id: 6,
  percent: 19,
  percentZP: 17,
  period: 36
}, {
  id: 7,
  percent: 21,
  percentZP: 19,
  period: 48
}, {
  id: 8,
  percent: 22,
  percentZP: 20,
  period: 60
},]

const Calculator = () => {
  const classes = useStyles({});
  const [sum, setSum] = React.useState(5000000);
  const [agree, setAgree] = React.useState(true);
  const [period, setPeriod] = React.useState(0);
  const { t } = useTranslation();
  function calculateRate(period: number) {
    const rate = data.filter(d => d.period === period).splice(0, 1)
    return (rate[0] && rate[0].percent && rate[0].percentZP) ? (agree ? rate[0].percentZP : rate[0].percent) : 0
  }
  return (
    <div className={classes.outerContainer} id="calc">
      <div className={classes.container}>
    <div className={classes.calc}>
      <BccTypography type="h4" block className={classes.calcTitle}>
        {t('calcred')}
      </BccTypography>
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        className={classes.calcContent}
        alignItems="center"
      >
        <Grid item>
          <div className={classes.paymentWrap}>
            <div className={classes.sliderWrap}>
              <BccInput
                label={t('chsum')}
                key="sum"
                value={sum + " ₸"}
                variant="filled"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e: any) =>
                  +e.target.value.slice(0, -2) > 7000000
                    ? setSum(7000000)
                    : setSum(e.target.value.slice(0, -2))
                }
                onFocus={() => setSum(0)}
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
                max={7000000}
                step={20000}
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
                <span>7 000 000</span>
              </div>
            </div>
          </div>
          <div className={classes.paymentWrap}>
            <div className={classes.sliderWrap}>
              <BccInput
                label={t('chper')}
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
                onFocus={() => setPeriod(0)}
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
                marks={marks}
                min={0}
                max={60}
                step={null}
                value={period}
                valueLabelDisplay="off"
                defaultValue={sum}
                onChange={(e: any, val: any) => {
                  console.log(e);
                  setPeriod(val instanceof Array ? val[1] : val);
                }}
              />
              <div className={classes.sliderRange}>
                <span>0</span>
                <span>60</span>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <BccTypography type="h5" block className={classes.calcTitleCount}>
            {t('calculation')}
          </BccTypography>
          <Grid container justify="space-between" className={classes.cardsText}>
            <Grid item>
              <BccTypography type="p4" block>
                {t('weekpay')}
              </BccTypography>
              <BccTypography type="p4" weight="medium" block>
                {period && sum ? `~ ${Math.round((((calculateRate(period) * sum) / 100) + sum) / period)}` : 0} ₸
              </BccTypography>
            </Grid>
            <Grid item>
              <BccTypography type="p4" block>
                {t('bet')}
              </BccTypography>
              <BccTypography type="p4" weight="medium" block>
              {calculateRate(period)}%
              </BccTypography>
            </Grid>
          </Grid>
          <BccButton
            variant="contained"
            fullWidth
            color="primary"
            className={classes.calcBtn}
            onClick={() => window.open('https://www.bcc.kz/credit-loan/')}
          >
            {t('credit')}
          </BccButton>
          <BccTypography type="p4" block>
            *{t('prime')}
          </BccTypography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="flex-start"
        alignItems="center"
        wrap="nowrap"
        className={classes.checkboxText}
      >
        <Grid item>
          <BccCheckbox
            value="remember"
            color="primary"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
        </Grid>
        <Grid item>
          <BccTypography type="p3">{t('zp')}</BccTypography>
        </Grid>
      </Grid>
    </div>
    </div>
    </div>
  );
}

export default Calculator;