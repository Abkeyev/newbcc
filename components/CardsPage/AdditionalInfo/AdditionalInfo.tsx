import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Tab from "./Tab";
import ExpansionPanel from "./ExpansionPanel";

const useStylesTarifs = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black"
      },
      TableW: {
        widthh: "100%"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        "& span": {
          fontSize: 14,
          color: "#5B5B5B"
        }
      },
      TableW: {
        widthh: "70%"
      }
    },
    th: {
      width: '30%'
    },
    a: {
      textDecoration: 'none',
      color: '#000000'
    }
  })
);

const Documents = () => {
  const classes = useStylesTarifs({});

  const rows = [
    { code: "Для резидентов РК", value: "Хватает удостоверения личности или паспорта" },
    { code: "Для нерезидентов РК", value: (
        <Typography className={classes.td}>
          · Документ, удостоверяющий личность (паспорт иностранного гражданина, вид на жительство иностранца в Республике Казахстан, удостоверение лица без гражданства)<br/><br/> · Документ, содержащий информацию об ИИН<br/><br/> · Документ, удостоверяющий регистрацию в уполномоченных органах РК  на право въезда, выезда и пребывания физического лица–нерезидента на территории РК, если иное не предусмотрено международными договорами, ратифицированными РК.
        </Typography>
      )
    }
  ];

  return (
    <Box className={classes.TableW}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Cashback = () => {
  const classes = useStylesTarifs({});

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} className={classes.td}>
              <Typography>
                <a href="/files/prot1.pdf" target="_blank" className={classes.a}>
                  <img src="/img/pdf.svg" alt="pdf" />
                  &nbsp; Протокол_56_1_от_311219_об утв тарифов и кешбэк.pdf
                </a>
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className={classes.td}>
              <Typography>
                <a href="/files/prot2.pdf" target="_blank" className={classes.a}>
                  <img src="/img/pdf.svg" alt="pdf" />
                  &nbsp; Протокол_56_1_от_311219_об утв тарифов и кешбэк_2.pdf
                </a>
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className={classes.td}>
                <Typography>
                  <a href="/files/protcash.pdf" target="_blank" className={classes.a}>
                  <img src="/img/pdf.svg" alt="pdf" />
                  &nbsp; Приложение_1_к_Протокол_56_1_от_311219_об утв тарифов и кешбэк_.pdf
                  </a>
                </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className={classes.td}>
                <Typography>
                  <a href="/files/pril2.doc" target="_blank" className={classes.a}>
                  <img src="/img/pdf.svg" alt="pdf" />
                  &nbsp; Прилож_2_Кешбэк_дебетные карты.doc
                  </a>
                </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: '18px 13px 18px 13px'
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "60px 42px 52px 52px",
        width: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      }
    },
    root: {
      maxWidth: 1280,
      margin: '0 auto',
      position: 'relative'
    }
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});

  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Полезно знать</Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => console.log(i)}
          menuTitle={["Документы на открытие карты", "Часто задаваемые вопросы", "Условия по кешбэку"]}
          pans={[<Documents />, <ExpansionPanel/>, <Cashback/>]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
