import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography } from '../BccComponents';
// import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      main: {
          padding: '32px 52px',
          maxWidth: 1280,
          margin: '0 auto'
      },
      title: {
          fontSize: 48,
          fontWeight: 'bold',
          marginBottom: 32,
          [theme.breakpoints.down('md')]: {
            fontSize: 36,
          },
          [theme.breakpoints.down('sm')]: {
            fontSize: 24,
          }
      },
      card: {
          padding: '60px 60px 30px 60px',
          backgroundColor: '#FAFAFA',
          borderRadius: 8,
          marginBottom: 50,
          transform: 'scale(.9825)',
          transition: 'box-shadow .19s ease-out 0s,transform .19s ease-out 0s',
          '&:hover': {
            boxShadow: '0 4px 20px 0 rgba(34,52,70,.1)',
            transform: 'scale(1)',
          },
          [theme.breakpoints.down('md')]: {
            padding: '30px',
          },
          color: '#141414',
          '& > div > img': {
              width: '95%',
              [theme.breakpoints.down('md')]: {
                marginBottom: 10
              },
          },
          '& > div > h1': {
              fontSize: 28,
              margin: '0 0 16px 0',
              fontWeight: 'bold',
              [theme.breakpoints.down('md')]: {
                fontSize: 24,
                marginBottom: 10
              },
              '& > span.chip': {
                  backgroundColor: 'rgba(125, 206, 160, 0.2)',
                  borderRadius: 4,
                  marginBottom: 10,
                  display: 'inline-block',
                  color: '#1F7042',
                  fontWeight: 'normal',
                  padding: '8px 16px',
                  marginLeft: 10,
                  verticalAlign: 'top',
                  marginTop: 2,
                  fontSize: 12
              },
              '& > span.chip.iron': {
                  backgroundColor: '#141414',
                  color: 'white'
              },
              '& > span.chip.travel': {
                  backgroundColor: '#49b3e1',
                  color: 'white'
              },
              '& > span.chip.hit': {
                  backgroundColor: '#622570',
                  color: 'white'
              }
          },
          '& > div > h2': {
              fontSize: 16,
              margin: '0 0 30px',
              fontWeight: 'normal'
          },
          '& > div > div > div > h3': {
            margin: '0 0 10px 0',
            fontWeight: 'bold',
            fontSize: 16,
            lineHeight: '20px',
            [theme.breakpoints.down('md')]: {
                fontSize: 16,
            }
          },
          '& > div > div > div > h4': {
            margin: '0 0 30px 0',
            fontWeight: 'normal',
            fontSize: 16,
            lineHeight: '20px',
            color: '#D0D0D0',
            [theme.breakpoints.down('md')]: {
                fontSize: 14,
            }
          }
      },
      cardIron: {
          background: 'linear-gradient(180deg, #373737 -116.52%, #818181 163.84%)',
          color: 'white',
          '& > div > h2': {
              color: 'white'
          }
      },
      cardTravel: {
          background: 'linear-gradient(180deg, #00c4ff -116.52%, #002a3a 163.84%)',
          color: 'white',
          '& > div > h2': {
              color: 'white'
          }
      },
      button: {
        background: '#00A755',
        borderRadius: 4,
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '20px',
        width: 240,
        boxSizing: 'border-box',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        padding: '16px 18px',
        '&:hover': {
            background: '#52BE80'
        },
        [theme.breakpoints.down('md')]: {
            padding: '12px 14px',
        },
        [theme.breakpoints.down('sm')]: {
            width: 'auto'
        },
      },
      buttonSecond: {
        background: 'none',
        marginLeft: 10,
        '&:hover': {
            borderColor: '#ecf1f7',
            backgroundColor: '#ecf1f7',
            color: '#00A755'
        }
      },
      iron: {
          '&:hover': {
            color: 'white',
            borderColor: 'transparent',
            backgroundColor: 'rgba(255,255,255,.16)'
          }
      },
      btnGreen: {
          color: '#00A755',
          '&:hover': {
              color: '#52BE80'
          }
      },
      showAllBtn: {
        border: '1px solid #E8E8E8',
        boxSizing: 'border-box',
        borderRadius: 4,
        color: '#00A755',
        padding: '15px 30px',
        cursor: 'pointer',
        fontSize: 14,
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: '#00A755',
            color: 'white'
        },
        '&:focus': {
            outline: 'none'
        }
      },
      cardsSecond: {
          backgroundColor: 'transparent',
          borderRadius: 8,
          width: '31%',
          '&:hover': {
              backgroundColor: '#FAFAFA'
          },
          '& > a': {
              padding: '32px 64px',
              display: 'block',
              textDecoration: 'none'
          },
          '& > a > div': {
              '& > img': {
                  display: 'block',
                  width: '100%',
                  marginBottom: 20,
                  [theme.breakpoints.down('xs')]: {
                      width: 'auto',
                  },
              },
              '& > h2': {
                  margin: 0,
                  fontSize: 16,
                  color: '#5B5B5B',
                  fontWeight: 'normal'
              }
          },
          [theme.breakpoints.down('sm')]: {
              padding: '16px 32px'
          },
      },
      h1: {
        fontSize: 18,
        color: 'black',
        margin: '0 0 15px',
        '& > a': {
            color: 'inherit',
            textDecoration: 'none'
        }
    },
    span: {
        backgroundColor: '#141414',
        borderRadius: 4,
        padding: '6px 12px',
        color: 'white',
        display: 'inline-block',
        marginLeft: 10,
        fontSize: 12,
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginBottom: 10
        },
    },
    block: {
        opacity: 0,
        maxHeight: 0,
        borderRadius: 8,
        textDecoration: 'none',
        transition: 'opacity .2s ease-out, max-height .3s ease-out .1s,box-shadow .19s ease-out 0s,transform .19s ease-out 0s',
        zIndex: -1,
        transform: 'scale(.9825)',
        position: 'relative',
        marginBottom: 25
    },
    smoothShow: {
        maxHeight: '1000px',
        opacity: 1,
        zIndex: 1,
        transition: 'opacity 1s ease-out,box-shadow .19s ease-out 0s,transform .19s ease-out 0s',
        marginBottom: 25
    }
  })
);

const Cards = () => {
  const classes = useStyles({});

  return (
    <Grid
        container
        direction="column"
        className={classes.main}
    >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.title}><BccTypography type="h1">Карты</BccTypography></Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={`${classes.card} ${classes.cardIron}`}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="/img/ironcard.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#IronCard<span className="chip iron">Премиум</span></h1>
                    <h2>Первая металлическая бесконтактная карта в Казахстане</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>15 грамм</h3>
                            <h4>Нержавеющая сталь</h4>
                        </Grid>
                        <Grid item>
                            <h3>4%</h3>
                            <h4>Кешбэк на все операции</h4>
                        </Grid>
                        <Grid item>
                            <h3>1 000+ бизнес-залов</h3>
                            <h4>Бесплатное посещение по всему миру</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/ironcard?utm_source=bcc&utm_medium=button_click&utm_campaign=cards#order" id="ironCardOrder" className={classes.button}>Заказать карту</a>
                    <a href="https://www.bcc.kz/ironcard?utm_source=bcc&utm_medium=button_click&utm_campaign=cards" id="ironCardDetail" className={`${classes.button} ${classes.buttonSecond} ${classes.iron}`}>Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={`${classes.card} ${classes.cardTravel}`}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="/img/travelcard.png" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#TravelCard<span className="chip travel">Премиум</span><span className="chip travel">Путешествия</span></h1>
                    <h2>Лучшая карта для путешествий</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>7%</h3>
                            <h4>Кешбэк на Travel</h4>
                        </Grid>
                        <Grid item>
                            <h3>1 000+ бизнес-залов</h3>
                            <h4>Бесплатное посещение по всему миру</h4>
                        </Grid>
                        <Grid item>
                            <h3>Переводы, снятие наличных</h3>
                            <h4>Бесплатные условия</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/travelcard/?utm_source=bcc&utm_medium=button_click&utm_campaign=cards#order" id="ironCardOrder" className={classes.button}>Заказать карту</a>
                    <a href="https://www.bcc.kz/travelcard/?utm_source=bcc&utm_medium=button_click&utm_campaign=cards" id="ironCardDetail" className={`${classes.button} ${classes.buttonSecond} ${classes.iron}`}>Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={classes.card}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="/img/cardcard.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#картакарта<span className="chip hit">хит продаж</span><span className="chip">карта рассрочки</span><span className="chip">кредитная карта</span><span className="chip">дебетовая карта</span></h1>
                    <h2>Бери для всего, что ты хочешь</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>до 3 млн. ₸</h3>
                            <h4>Кредитный лимит</h4>
                        </Grid>
                        <Grid item>
                            <h3>до 12 месяцев</h3>
                            <h4>Рассрочка без процентов</h4>
                        </Grid>
                        <Grid item>
                            <h3>до 30%</h3>
                            <h4>Кешбэк</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/kartakarta?utm_source=bcc&utm_medium=button_click&utm_campaign=cards#order" id="kartakartaOrder" className={classes.button}>Заказать карту</a>
                    <a href="https://www.bcc.kz/kartakarta?utm_source=bcc&utm_medium=button_click&utm_campaign=cards" id="kartakartaDetail" className={`${classes.button} ${classes.buttonSecond} ${classes.btnGreen}`}>Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={classes.card}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="/img/fiol-card.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#мнефиолетово зарплатная</h1>
                    <h2>Карта для получения заработной платы</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>Чат, звонки, почта</h3>
                            <h4>Круглосуточная поддержка</h4>
                        </Grid>
                        <Grid item>
                            <h3>Выпуск, обслуживание</h3>
                            <h4>Бесплатные условия</h4>
                        </Grid>
                        <Grid item>
                            <h3>Переводы, снятие наличных</h3>
                            <h4>Бесплатные условия</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/cards/payroll-card/" id="socialcard" className={classes.button}>Заказать карту</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={classes.card} style={{marginBottom: 24}}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="/img/fiol-card.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#мнефиолетово пенсионная<span className="chip">для социальных отчислений/алиментов</span></h1>
                    <h2>Карта для получения пенсий и других социальных пособий</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>Чат, звонки, почта</h3>
                            <h4>Круглосуточная поддержка</h4>
                        </Grid>
                        <Grid item>
                            <h3>Выпуск, обслуживание</h3>
                            <h4>Бесплатные условия</h4>
                        </Grid>
                        <Grid item>
                            <h3>Переводы, снятие наличных</h3>
                            <h4>Бесплатные условия</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/cards/pension-card/" id="socialcard" className={classes.button}>Заказать карту</a>
                </Grid>
            </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12}>
            <Grid container direction="row" justify="space-between" className={classes.card} style={{marginBottom: 24}}>
                <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                    <img src="/img/juniorcard.svg" alt=""/>
                </Grid>
                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <h1>#juniorbank<span className="chip">от 6 до 18 лет</span></h1>
                    <h2>Первая карта вашего ребенка. Удобное мобильное приложение для детей.</h2>
                    <Grid container direction="row" justify="space-between">
                        <Grid item>
                            <h3>Финансовая грамотность</h3>
                            <h4>Для родителей</h4>
                        </Grid>
                        <Grid item>
                            <h3>Виртуальная, пластик</h3>
                            <h4>Карты</h4>
                        </Grid>
                        <Grid item>
                            <h3>Дистанционный, в отделениях</h3>
                            <h4>Выпуск карты</h4>
                        </Grid>
                    </Grid>
                    <a href="https://www.bcc.kz/juniorbank/" className={classes.button}>Заказать карту</a>
                    <a href="https://www.bcc.kz/juniorbank/" className={`${classes.button} ${classes.buttonSecond} ${classes.btnGreen}`}>Подробнее о карте</a>
                </Grid>
            </Grid>
        </Grid>
        {/* <Grid item container justify="space-between" className={`${classes.block} ${show ? classes.smoothShow : ''}`}>
            <Grid item className={classes.cardsSecond} xl={true} lg={true} md={true} sm={true} xs={12}>
                <a href="https://www.bcc.kz/product/standard-card/" id="standartCard1" target="_blank">
                    <div>
                        <img src="card1.svg" alt=""/>
                        <Grid container justify="space-between">
                            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><h1 className={classes.h1}>Visa Infinite</h1></Grid>
                            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><span className={classes.span}>Премиум</span></Grid>
                        </Grid>
                        <h2>Премиальная карта</h2>
                    </div>
                </a>
            </Grid>
            <Grid item className={classes.cardsSecond} xl={true} lg={true} md={true} sm={true} xs={12}>
                <a href="https://www.bcc.kz/product/standard-card/" id="standartCard2" target="_blank">
                    <div>
                        <img src="card2.svg" alt=""/>
                        <Grid container justify="space-between">
                            <Grid item><h1 className={classes.h1}>Visa Instant Social Card</h1></Grid>
                            <Grid item></Grid>
                        </Grid>
                        <h2>Для пенсии и пособий</h2>
                    </div>
                </a>
            </Grid>
            <Grid item className={classes.cardsSecond} xl={true} lg={true} md={true} sm={true} xs={12}>
                <a href="https://www.bcc.kz/product/standard-card/" id="standartCard3" target="_blank">
                    <div>
                        <img src="card3.svg" alt=""/>
                        <Grid container justify="space-between">
                            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><h1 className={classes.h1}>Mastercard Black Edition</h1></Grid>
                            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}><span className={classes.span}>Премиум</span></Grid>
                        </Grid>
                        <h2>Экслюзивная карта</h2>
                    </div>
                </a>
            </Grid>
        </Grid> */}
        {/* <Grid item xl={12} lg={12} md={12} style={{ marginBottom: 64, zIndex: 2 }}>
            <button className={classes.showAllBtn} onClick={() => showAll()}>{show ? 'Скрыть карты' : 'Показать все карты'} (3)</button>
        </Grid> */}
    </Grid>
  );
};

export default Cards;
