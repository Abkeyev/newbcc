import React from "react";
import { Grid, MenuItem } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccButton,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputMask from "react-input-mask";
import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import api from "../api/Api";
import { animateScroll } from "react-scroll";
import { OrderProps } from '../interfaces';
import ReactGA from 'react-ga';
import { useRouter } from "next/router"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#fafafa",
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "48px 48px",
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      orderForm: {
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        width: "60%",
        padding: 46,
        boxSizing: "border-box",
        maxWidth: "60%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 16,
      },
      subTitleForm: {
        marginBottom: 46,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 48,
        textAlign: "left",
      },
      checkboxText: {
        alignItems: "center",
        marginBottom: 48,
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
        },
      },
      successForm: {
        backgroundColor: "rgba(125, 206, 160, 0.1)",
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#fafafa",
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "20px",
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      orderForm: {
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        width: "90%",
        padding: 48,
        boxSizing: "border-box",
        maxWidth: "90%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 16,
      },
      subTitleForm: {
        marginBottom: 46,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 48,
        textAlign: "left",
      },
      checkboxText: {
        alignItems: "center",
        marginBottom: 48,
      },
      btnWrap: {
        width: "calc(50% - 10px)",
        "& > button": { width: "100%" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      garant: { textAlign: "left" },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
        },
      },
      successForm: {
        backgroundColor: "rgba(125, 206, 160, 0.1)",
        borderRadius: 8,
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        paddingTop: 56
      },
      orderForm: {
        width: "100%",
        maxWidth: "100%",
        padding: 20,
      },
      checkboxText: {
        textAlign: "left",
        marginBottom: 12,
      },
      inputStyle: {
        marginBottom: 20,
      },
      btnWrap: {
        width: "100%",
        marginBottom: 12,
        "& > button": { width: "100%" },
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}
const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(999) 999 99 99"
      maskChar=""
      placeholder={"+7(707) 707 77 77"}
    />
  );
};
const BccMaskedIinInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <InputMask
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="999 999 999 999"
      maskChar=""
      placeholder={"000 000 000 000"}
    />
  );
};
const cityList = [
  "Нур-Султан",
  "Алматы",
  "Шымкент",
  "Актау",
  "Актобе",
  "Атырау",
  "Жезказган",
  "Караганда",
  "Кокшетау",
  "Костанай",
  "Кызылорда",
  "Павлодар",
  "Петропавловск",
  "Семей",
  "Талдыкорган",
  "Тараз",
  "Уральск",
  "Усть-Каменогорск",
];

interface OrderPageProps {
  order: OrderProps[];
}

const Order = (props: OrderPageProps) => {
  const { order } = props;
  const classes = useStyles({});
  const [step, setStep] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  const [code, setCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [fio, setFio] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);
  const [iin, setIin] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [iinError] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  const orderRef: any = React.useRef(null);
  const scrollToOrderRef = () => {
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };
  
  const isValid = () => {
    return fio.length > 1 && city.length > 1 && iin.replace(/ /g, "").length === 12 && 
            phone.replace("_", "").length === 17 && agree;
  };

  const getUTM = (mark: boolean = false) => {
    const path = router.asPath.split('?')
    if(path.length > 1 && path[1]) {
      if(mark){
        return path[1].split('@')[1] ? path[1].split('@')[1] : "0"
      }else return path[1].split('@')[0]
    }else return ""
  }

  React.useEffect(() => {
    let timeOut = setInterval(() => {
      if (timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [timer]);

  const formatPhoneNumber = () => {
    let res = phone;
    if (phone.slice(0, 1) === "8") res = "7" + phone.slice(1);
    return res.replace(/\(|\)|\+| /g, "");
  };

  const getOtp = () => {
    if (phone.substr(3, 1) !== "7") {
      setPhoneError(true);
      return;
    } else setPhoneError(false);
    ReactGA.event({
      category: order[0] && order[0].actionCategory,
      action: order[0] && order[0].actionAction,
    });
    setLoading(true);
    setTimer(60);
    api.main
      .sendOtp(formatPhoneNumber())
      .then(() => {
        setStep(1);
        scrollToOrderRef()
        setLoading(false);
      })
      .catch((e: any) => {
        console.error(e);
        scrollToOrderRef()
        setLoading(false);
      });
  };

  const onSubmitOtp = () => {
    setLoading(true);

    ReactGA.event({
      category: order[0] && order[0].afterActionCategory,
      action: order[0] && order[0].afterActionAction,
    });
    api.main
      .sendOrder({
        client: {
          fio,
          iin: iin.replace(/ /g, ""),
          phone: formatPhoneNumber(),
          city
        },
        productCode: order[0] && order[0].productCode,
        secretSms: code,
        markId: getUTM(true) === "" ? -1 : getUTM(true),
        params: getUTM()
      })
      .then(() => {
        scrollToOrderRef()
        setStep(2);
        setLoading(false);
      })
      .catch((e: any) => {
        scrollToOrderRef()
        console.error(e);
        setLoading(false);
      });
  };

  return (
    <div className={classes.outerContainer} ref={orderRef} id="order">
      <div className={classes.container}>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <Grid item>
              <BccTypography type="h2" weight="medium" block mb="16px">
                {(order && order.length > 0 && order[0]) ? order[0].productName : 'Оставить заявку'}
              </BccTypography>
              <BccTypography type="p1" block color="#4D565F" mb="46px">
                Оставьте заявку и наш менеджер перезвонит Вам
              </BccTypography>
            </Grid>
            <BlockUi tag="div" blocking={isLoading}>
            {
              step === 0 ? (
                <>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label="ФИО"
                      variant="filled"
                      id="fio"
                      name="fio"
                      value={fio}
                      onChange={(e: any) => setFio(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      className={classes.inputStyle}
                      fullWidth
                      label={"ИИН"}
                      variant="filled"
                      id="iin"
                      name="iin"
                      value={iin}
                      onChange={(e: any) => setIin(e.target.value)}
                      helperText={iinError ? "Неверный формат ИИН" : ""}
                      error={iinError ? true : false}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedIinInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      variant="filled"
                      fullWidth
                      label="Номер телефона"
                      onChange={(e: any) => setPhone(e.target.value)}
                      className={classes.inputStyle}
                      helperText={phoneError ? "Неверный формат номера телефона" : ""}
                      error={phoneError ? true : false}
                      id="phone"
                      name="phone"
                      value={phone}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputComponent: BccMaskedInput as any,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <BccInput
                      fullWidth={true}
                      className={classes.inputStyle}
                      label={"Город"}
                      id="city"
                      name="city"
                      value={city}
                      onChange={(e: any) => setCity(e.target.value)}
                      variant="outlined"
                      select
                    >
                      {cityList.map((b: any, index: number) => {
                        return (
                          <MenuItem key={index} value={b}>
                            {b}
                          </MenuItem>
                        );
                      })}
                    </BccInput>
                  </Grid>
                  <Grid item>
                    <Grid
                      container
                      justify="flex-start"
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
                        <BccTypography type="p3" ml="10px">
                          Соглашаюсь с обработкой данных и с{" "}
                          <BccLink href="https://www.bcc.kz/">
                            условиями передачи информации
                          </BccLink>
                        </BccTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      <Grid item className={classes.btnWrap}>
                        <Grid container spacing={2}>
                          <Grid item>
                            <img
                              src={"/img/safety.svg"}
                              className={classes.icon}
                              alt="order_security"
                            />
                          </Grid>
                          <Grid
                            item
                            xl={true}
                            lg={true}
                            md={true}
                            sm={true}
                            xs={true}
                          >
                            <BccTypography type="p3" className={classes.garant}>
                              Мы гарантируем безопасность и сохранность ваших данных
                            </BccTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item className={classes.btnWrap}>
                        <BccButton
                          variant="contained"
                          disabled={!isValid()}
                          onClick={() => getOtp()}
                          color="primary"
                        >
                          Отправить заявку
                        </BccButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              ) : step === 1 ? (
                <Grid
                  item
                  container
                  justify="space-between"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <BccInput
                      variant="outlined"
                      className={classes.code}
                      margin="normal"
                      fullWidth
                      id="code"
                      name="code"
                      value={code}
                      onChange={(e: any) =>
                        setCode(
                          e.target.value.replace(/\D/g, "").substr(0, 6)
                        )
                      }
                      label="Код подтверждения"
                    />
                  </Grid>
                  <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <BccButton
                      onClick={() => onSubmitOtp()}
                      variant="contained"
                      fullWidth
                      disabled={!isValid()}
                    >
                      Подтвердить
                    </BccButton>
                  </Grid>
                  {timer !== 0 ? (
                    <Grid item>
                      <BccTypography type="p3" className={classes.timer}>
                        {`Отправить повторно СМС через 00:${timer}`}
                      </BccTypography>
                    </Grid>
                  ) : (
                    <Grid item>
                      <BccButton
                        variant="text"
                        className={classes.linkReSendSms}
                        onClick={() => getOtp()}
                      >
                        Отправить повторно
                      </BccButton>
                    </Grid>
                  )}
                  </Grid>
              ) : (
                <Grid item>
                  <div className={classes.successForm}>
                    <img
                      src="/img/success.svg"
                      alt=""
                    />
                    <BccTypography type="h6" color="#1F7042" mb="16px">
                      Заявка успешно отправлена
                    </BccTypography>
                    <BccTypography type="p2" color="#1F7042">
                      В ближайшее время с Вами свяжется наш специалист для информирования о дальнейших действиях.
                    </BccTypography>
                  </div>
                </Grid>
              )
            }
            </BlockUi>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
