import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        width: "100%",
        marginTop: 10
      },
      item: {
        marginBottom: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        borderColor: "transparent",
        "&:before": {
          height: 0
        }
      },
      summary: {
        fontSize: theme.typography.pxToRem(10),
        color: "#141414"
      },
      details: {
        fontSize: theme.typography.pxToRem(10),
        color: "#5B5B5B"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        width: "100%",
        marginTop: 15
      },
      item: {
        marginBottom: 15,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        borderColor: "transparent",
        "&:before": {
          height: 0
        }
      },
      summary: {
        fontSize: theme.typography.pxToRem(16),
        color: "#141414"
      },
      details: {
        fontSize: theme.typography.pxToRem(16),
        color: "#5B5B5B"
      },
      link: {
        color: '#00A755',
        textDecoration: 'none'
      }
    }
  })
);

const ControlledExpansionPanels = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const arrays = [
    {
      question: "Как заказать карту?",
      answer: (
        <Typography>
          Карту можно заказать <a className={classes.link} target="_blank" href="http://m.bcc.kz/">в BCC.KZ</a>, на сайте каждого продукта или в удобном для вас <a href="https://www.bcc.kz/branches-and-atms/" target="_blank" className={classes.link}>офисе Банка</a>
        </Typography>
      )
    },
    {
      question: "Что делать, если я потерял карту?",
      answer: (
        <Typography>
          1. Заблокировать карту <a className={classes.link} target="_blank" href="http://m.bcc.kz/">в BCC.KZ</a><br/>
          2. Позвонить в колл-центр Банка по номеру <a href="tel:505" target="_blank" className={classes.link}>505</a> или обратиться <a href="https://www.bcc.kz/branches-and-atms/" target="_blank" className={classes.link}>в ближайшее отделение Банка</a>
        </Typography>
      )
    },
    {
      question: "Как восстановить карту?",
      answer: (
        <Typography>
          Оставить заявку на перевыпуск в <a className={classes.link} target="_blank" href="http://m.bcc.kz/">мобильном приложении</a>. Также можно восстановить карту,  если позвонить <a href="tel:505" target="_blank" className={classes.link}>в колл-центр Банка по номеру 505</a> или обратиться <a href="https://www.bcc.kz/branches-and-atms/" target="_blank" className={classes.link}>в ближайшее отделение Банка</a>
        </Typography>
      )
    },
    {
      question: "Как привязать карту к Apple Pay/Samsung Pay?",
      answer: (
        <Typography>
          <b>Для держателей iPhone</b><br/>
          1. Зайти в приложение Wallet<br/>2. Привязать карту к кошельку, следуя инструкциям от Apple<br/><br/>
          <b>Для держателей Samsung</b><br/>
          1. Пройдите регистрацию <a className={classes.link} href="https://www.samsung.com/kz_ru/apps/mobile/samsungpay/" target="_blank">на сайте Samsung</a><br/>
          2. Введите e-mail Вашей учетной записи Samsung account и выберите модель Вашего девайса<br/>
          3. Установите приложение с Galaxy store<br/>
          4. Зайдите в приложение Samsung Pay и следуйте инструкции в мобильном приложении<br/>
          5. Добавьте номер карты Visa / Mastercard через сканер или вручную и подтвердите подключение
        </Typography>
      )
    },
    {
      question: "Как получать высокий кешбэк?",
      answer: (
        <Typography>
          Оплачивайте картой как можно больше покупок. <br/>
Если каждый месяц в BCC.KZ Вы выбираете любимые категории покупок с повышенным кешбэком в разделе “Кешбэк”, Вы получаете до 10% кешбэка в выбранных категориях.<br/>
За други е личные покупки 1% кешбэка, а при наличии вклада Рахмет или Рахмет+ 
от 1 млн. тенге 2% кешбэка. В сети партнеров кешбэк может достигать 30%
        </Typography>
      )
    },
    {
      question: "Где можно оплачивать покупки картой?",
      answer: (
        <Typography>
          Вы можете воспользоваться картой в любой торговой или сервисной точке мира, где расположена эмблема платежной системы VISA или MasterCard для оплаты за товары и услуги.<br/>При этом у Вас не будет удерживаться комиссия.<br/><br/>Снимать наличные в любом банкомате или отделении банка, где есть обслуживание по карточке Visa/ MasterCard.
        </Typography>
      )
    }
  ];

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    console.log(event)
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {arrays.map((m, i) => (
        <ExpansionPanel
          elevation={0}
          className={classes.item}
          expanded={expanded === `${i}`}
          onChange={handleChange(`${i}`)}
          key={i}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.summary}>{m.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>{m.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default ControlledExpansionPanels;
