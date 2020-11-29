import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccButton,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";

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
        padding: "24px",
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
    },
    [theme.breakpoints.down("xs")]: {
      orderForm: {
        width: "100%",
        maxWidth: "100%",
        padding: 24,
      },
      checkboxText: {
        textAlign: "left",
        marginBottom: 12,
      },
      inputStyle: {
        marginBottom: 24,
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
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="7(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

interface OrderProps {
  title: string;
}

const Order = (props: OrderProps) => {
  const classes = useStyles({});
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);

  const isValid = () => {
    console.log(phone.replace("_", "").length);
    return name.length > 1 && phone.replace("_", "").length === 16 && agree;
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <Grid item>
              <BccTypography type="h2" weight="medium" block mb="16px">
                {props.title}
              </BccTypography>
              <BccTypography type="p1" block color="#4D565F" mb="46px">
                Оставте заявку и наш менеджер перезвонит Вам
              </BccTypography>
            </Grid>
            <Grid item>
              <BccInput
                className={classes.inputStyle}
                fullWidth
                label="Имя"
                variant="filled"
                id="name"
                name="name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <BccInput
                variant="filled"
                fullWidth
                label="Номер телефона"
                onChange={(e: any) => setPhone(e.target.value)}
                className={classes.inputStyle}
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
                    color="primary"
                  >
                    Отправить заявку
                  </BccButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
