import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  Slider,
  Benefits,
} from "../../components";
import {
  BccTypography,
  BccCard
} from "../../components/BccComponents";
import { SliderProps, BenefitsProps } from '../../interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      goldInfo: {
        flexWrap: 'nowrap',
        marginBottom: 40,
        '& > div': {
          width: 'calc(50% - 12px)',
          padding: '64px 100px',
          border: '1px solid #CCCFD1',
          backgroundColor: 'white',
          borderRadius: 8,
        }
      },
      benefits: {
        flexWrap: 'nowrap',
        marginBottom: 80,
        '& > div': {
          width: 'calc(33% - 16px)',
          border: '1px solid #CCCFD1',
          textAlign: 'center',
          padding: '30px 30px 10px',
        }
      },
    },
    [theme.breakpoints.down("sm")]: {
      
    },
    cards: {
      backgroundColor: '#fafafa',
      maxWidth: 1280,
      margin: "0 auto",
      width: "100%",
      padding: "48px",
      boxSizing: "border-box",
    },
    cardsItem: {
      '& > div': {
        width: 'calc(33% - 16px)',
        marginBottom: 40
      },
      '& > div:first-child, & > div:nth-child(2), & > div:nth-child(4)': {
        marginRight: 12
      },
    },
    goldBanner: {
      background: 'url(/img/gold-card.png) no-repeat center',
      backgroundSize: 'contain',
      borderRadius: 8,
      marginBottom: 80,
      height: 300
    },
    goldBlock: {
      backgroundColor: '#fafafa',
      maxWidth: 1280,
      margin: "0 auto",
      width: "100%",
      padding: "48px",
      boxSizing: "border-box",
    },
    gramm: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > span': {
        width: '33%',
        padding: '8px',
        color: '#00A755',
        '& > span': {
          color: '#4D565F'
        }
      }
    }
  })
);

const slider: SliderProps[] = [{
    button: {
        id: 0,
        buttonColor: 'primary',
        buttonLink: '#read-more',
        buttonText: 'Узнать больше',
        buttonType: "contained"
    },
    button2: {
        id: 0,
        buttonColor: 'primary',
        buttonLink: '#read-more',
        buttonText: 'Узнать больше',
        buttonType: "contained"
    },
    slider: {
        backgroundColor: "#F2F2F2",
        disabled: false,
        id: 1,
        image: "img/gold.png",
        imgLocal: true,
        isFull: true,
        subtitle: "Покупать и продавать золото - легко!",
        title: "#золотые слитки",
        content: ""
    }
}]

const benefits: BenefitsProps[] = [{
  id: 0,
  color: 'white',
  title: 'Преимущества',
  align: 'center',
  benefitItems: [{
    id: 1,
    title: "Надежный способ защиты собственных сбережений",
    image: '/img/gold-benefits1.png',
    content: ''
  },{
    id: 2,
    title: "Высокая ликвидность и выгодные условия ",
    image: '/img/gold-benefits2.png',
    content: ''
  },{
    id: 3,
    title: "Долгосрочные инвестиции в собственное будущее и будущее своих детей.",
    image: '/img/gold-benefits3.png',
    content: ''
  },{
    id: 4,
    title: "Отличный подарок друзьям и близким",
    image: '/img/gold-benefits4.png',
    content: ''
  }]
}]

const GoldBarPage = () => {
  const classes = useStyles({});
  return (
    <Layout title="#золотые слитки">
      <div className="main-page">
        <div className="container">
          <Slider slider={slider} breadcrumbs={[
              {title: "Частным лицам", link: "/", isExternal: false}, 
              {title: "Золотые слитки", link: null, isExternal: false}
            ]}/>
          <div className={classes.goldBlock}>
            <Grid container justify="space-between" className={classes.goldInfo}>
              <Grid item>
                <BccTypography type="h4" mb="16px" weight="bold" block>О золотых слитках</BccTypography>
                <BccTypography type="p2l" color="#4D565F">Золотые слитки с пробой с пробой 999,9 в рамках программы Национального Банка Республики Казахстан по выкупу и продаже мерных слитков аффинированного золота населению.</BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="h4" mb="16px" weight="bold" block>Детали</BccTypography>
                <BccTypography type="p2l" block mb="8px" color="#4D565F">Золотые слитки представлены в пяти разновидностях:</BccTypography>
                <BccTypography type="p2l" block mb="8px">
                  <span className={classes.gramm}>
                    <span><span>•</span> 5 грамм</span>
                    <span><span>•</span> 10 грамм</span>
                    <span><span>•</span> 20 грамм</span>
                    <span><span>•</span> 50 грамм</span>
                    <span><span>•</span> 100 грамм</span>
                  </span>
                </BccTypography>
                <BccTypography type="p2l" block color="#4D565F">
                  Упаковка, как и сами слитки, содержит защитные элементы и представляет собой сертификат качества актива.<br/>Целостность упаковки является залогом сохранения стоимости слитков.<br/>Рекомендуется бережное хранение.<br/>Упаковку не вскрывать!
                </BccTypography>
              </Grid>
            </Grid>
            <div className={classes.goldBanner}></div>
            <BccTypography align="center" weight="bold" block type="h3" mb="46px">Защитные элементы слитков</BccTypography>
            <Grid container justify="space-between" className={classes.benefits}>
              <Grid item>
                <img src="/img/gold-item1.png" alt="gold-item1"/>
                <BccTypography align="center" block type="h5" weight="bold" mt="24px">Зеркальная поверхность слитков</BccTypography>
              </Grid>
              <Grid item>
                <img src="/img/gold-item2.png" alt="gold-item1"/>
                <BccTypography align="center" block type="h5" weight="bold" mt="24px">Микротекст</BccTypography>
              </Grid>
              <Grid item>
                <img src="/img/gold-item3.png" alt="gold-item1"/>
                <BccTypography align="center" block type="h5" weight="bold" mt="24px">Рельефный гурт</BccTypography>
              </Grid>
            </Grid>
          </div>
          <Benefits benefits={benefits} />
          <div className={classes.cards}>
            <BccTypography align="center" weight="bold" block type="h3" mb="40px">Виды золотых слитков</BccTypography>
            <Grid container justify="center" wrap="wrap" className={classes.cardsItem}>
              <Grid item>
                <BccCard
                  title="Золотые слитки"
                  btn={[]}
                  variant="vertical"
                  img="/img/gold1.png"
                  chips={[
                    {
                      chip: {
                        id: 3,
                        title: "5 граммов",
                        type: "outlined",
                        color: "#4d565f",
                      },
                    },
                    {
                      chip: {
                        id: 4,
                        title: "Проба 999.9",
                        type: "contained",
                        color: "#00A755",
                      },
                    }
                  ]}
                  text={<><BccTypography block type='h5' weight='bold' mb='16px'>Золотые слитки</BccTypography><BccTypography type='p2l' weight='medium' mr='24px'>Ширина 14.1 мм</BccTypography><BccTypography type='h5' weight='medium'>Длина 24.2 мм</BccTypography></>}
                />
              </Grid>
              <Grid item>
                <BccCard
                  title="Золотые слитки"
                  btn={[]}
                  variant="vertical"
                  img="/img/gold2.png"
                  chips={[
                    {
                      chip: {
                        id: 3,
                        title: "10 граммов",
                        type: "outlined",
                        color: "#4d565f",
                      },
                    },
                    {
                      chip: {
                        id: 4,
                        title: "Проба 999.9",
                        type: "contained",
                        color: "#00A755",
                      },
                    }
                  ]}
                  text={<><BccTypography block type='h5' weight='bold' mb='16px'>Золотые слитки</BccTypography><BccTypography type='p2l' weight='medium' mr='24px'>Ширина 14.1 мм</BccTypography><BccTypography type='h5' weight='medium'>Длина 24.2 мм</BccTypography></>}
                />
              </Grid>
              <Grid item>
                <BccCard
                  title="Золотые слитки"
                  btn={[]}
                  variant="vertical"
                  img="/img/gold3.png"
                  chips={[
                    {
                      chip: {
                        id: 3,
                        title: "20 граммов",
                        type: "outlined",
                        color: "#4d565f",
                      },
                    },
                    {
                      chip: {
                        id: 4,
                        title: "Проба 999.9",
                        type: "contained",
                        color: "#00A755",
                      },
                    }
                  ]}
                  text={<><BccTypography block type='h5' weight='bold' mb='16px'>Золотые слитки</BccTypography><BccTypography type='p2l' weight='medium' mr='24px'>Ширина 14.1 мм</BccTypography><BccTypography type='h5' weight='medium'>Длина 24.2 мм</BccTypography></>}
                />
              </Grid>
              <Grid item>
                <BccCard
                  title="Золотые слитки"
                  btn={[]}
                  variant="vertical"
                  img="/img/gold4.png"
                  chips={[
                    {
                      chip: {
                        id: 3,
                        title: "50 граммов",
                        type: "outlined",
                        color: "#4d565f",
                      },
                    },
                    {
                      chip: {
                        id: 4,
                        title: "Проба 999.9",
                        type: "contained",
                        color: "#00A755",
                      },
                    }
                  ]}
                  text={<><BccTypography block type='h5' weight='bold' mb='16px'>Золотые слитки</BccTypography><BccTypography type='p2l' weight='medium' mr='24px'>Ширина 14.1 мм</BccTypography><BccTypography type='h5' weight='medium'>Длина 24.2 мм</BccTypography></>}
                />
              </Grid>
              <Grid item>
                <BccCard
                  title="Золотые слитки"
                  btn={[]}
                  variant="vertical"
                  img="/img/gold5.png"
                  chips={[
                    {
                      chip: {
                        id: 3,
                        title: "100 граммов",
                        type: "outlined",
                        color: "#4d565f",
                      },
                    },
                    {
                      chip: {
                        id: 4,
                        title: "Проба 999.9",
                        type: "contained",
                        color: "#00A755",
                      },
                    }
                  ]}
                  text={<><BccTypography block type='h5' weight='bold' mb='16px'>Золотые слитки</BccTypography><BccTypography type='p2l' weight='medium' mr='24px'>Ширина 14.1 мм</BccTypography><BccTypography type='h5' weight='medium'>Длина 24.2 мм</BccTypography></>}
                />
              </Grid>
            </Grid>
          </div>
          {/* <Tabs tabs={tabs} /> */}
        </div>
      </div>
    </Layout>
  );
};

export default GoldBarPage;
