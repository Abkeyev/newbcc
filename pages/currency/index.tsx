import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccTypography,
  BccChip,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
  BccCardFull,
} from "../../components/BccComponents";
import { CurrencyProps } from '../../interfaces';
import api from "../../api/Api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "48px 48px 0",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 360,
        margin: 0,
      },
      swap: {
        margin: "0 20px",
      },
      tableOuter: {
        overflow: "visible",
      },
      chip: {
        width: "maxContent",
        overflow: "hidden",
        flexWrap: "nowrap",
        display: "flex",
      },
      table: {
        borderRadius: 4,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        marginTop: 32,
        "& tr:last-child > td": {
          borderBottom: "none",
        },
        "& tr > td": { border: "none", borderBottom: "0.5px solid #97979780" },
        "& tbody > tr:nth-child(2n)": {
          backgroundColor: "#FAFAFA",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "80px 20px 0",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      chip: {
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
      },
      input: {
        minWidth: "250px",
        margin: 0,
      },
      swap: {
        margin: "0 20px",
      },
      tableOuter: {
        overflow: "visible",
      },
      table: {
        borderRadius: 4,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        marginTop: 32,
        "& tr:last-child > td": {
          borderBottom: "none",
        },
        "& tr > td": { border: "none", borderBottom: "0.5px solid #97979780" },
        "& tbody > tr:nth-child(2n)": {
          backgroundColor: "#FAFAFA",
        },
      },
      cur: {
        justifyContent: "space-between",
      },
      ttle: {
        marginTop: "36px!important",
      },
    },
    [theme.breakpoints.down("xs")]: {
      cur: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
          textAlign: "center",
          margin: "12px 0",
        },
      },
      date: {
        marginBottom: "20px!important",
      },
      input: {
        width: "100%",
      },
    },
  })
);

interface CurrencyPageProps {
  currency: CurrencyProps[];
}

const CurrencyPage = (props: CurrencyPageProps) => {
  const { currency } = props
  const classes = useStyles({});
  const [isGold, setGold] = React.useState<boolean>(false)
  
  const formatDate = (date: string): string => {
    const dateArr = date.substr(0,16).split(' ')
    const dateArr2 = dateArr[0].split('-')
    return `на ${dateArr2[2]}.${dateArr2[1]}.${dateArr2[0]} ${dateArr[1]}`
  }

  return (
    <Layout title="Курсы валют" >
      <div className="main-page">
        <div className="container">
          <div className={classes.contents}>
            <BccTypography type="h1" block mb="20px">
              Курсы валют
            </BccTypography>
            <BccTypography
              type="p1"
              block
              className={classes.date}
              mb="32px"
              color="#4D565F"
            >
              {currency && currency.length > 0 && currency[0] && currency[5] && formatDate(isGold ? currency[0].dateTime : currency[5].dateTime)}
            </BccTypography>
            <div className={classes.chip}>
              <BccChip onClick={() => setGold(false)} type={!isGold ? "contained" : "outlined"} color="secondary" mr="16px">
                Валюты
              </BccChip>
              <BccChip onClick={() => setGold(true)} type={isGold ? "contained" : "outlined"} color="secondary" mr="16px">
                Золото
              </BccChip>
            </div>
            <BccTableContainer className={classes.tableOuter}>
              <BccTable className={classes.table}>
                <BccTableHead>
                  <BccTableRow>
                    <BccTableCell>
                      <BccTypography
                        type="p2"
                        block
                        align="right"
                        weight="medium"
                      >
                        {isGold ? "Вес" : "Валюта"}
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography
                        type="p2"
                        block
                        align="right"
                        weight="medium"
                      >
                        Курс покупки
                      </BccTypography>
                    </BccTableCell>
                    <BccTableCell>
                      <BccTypography
                        type="p2"
                        block
                        align="right"
                        weight="medium"
                      >
                        Курс продажи
                      </BccTypography>
                    </BccTableCell>
                  </BccTableRow>
                </BccTableHead>
                <BccTableBody>{
                    isGold ? (
                      <>
                        {
                          currency && currency.length > 0 && currency.filter((c: CurrencyProps) => c.currency === 'XAU').map((c: CurrencyProps, index: number) => (
                            <BccTableRow>
                              <BccTableCell>
                                <BccTypography type="p2" align="right" block>
                                {index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 4 : index === 3 ? 10 : index === 4 ? 20 : 0} грамм
                                </BccTypography>
                              </BccTableCell>
                              <BccTableCell>
                                <BccTypography type="p2" align="right" block>
                                  {c.purchase.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                </BccTypography>
                              </BccTableCell>
                              <BccTableCell>
                                <BccTypography type="p2" align="right" block>
                                  {c.sell.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                                </BccTypography>
                              </BccTableCell>
                            </BccTableRow>
                          ))
                        }
                      </>
                    ) : (
                      <>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          USD
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          {currency && currency.length > 0 && currency.find((c: CurrencyProps) => (c.currency === "USD"))?.purchase}
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          {currency && currency.length > 0 && currency.find((c: CurrencyProps) => (c.currency === "USD"))?.sell}
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          EUR
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          {currency && currency.length > 0 && currency.find((c: CurrencyProps) => (c.currency === "EUR"))?.purchase}
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          {currency && currency.length > 0 && currency.find((c: CurrencyProps) => (c.currency === "EUR"))?.sell}
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          RUB
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          {currency && currency.length > 0 && currency.find((c: CurrencyProps) => (c.currency === "RUB"))?.purchase}
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography type="p2" align="right" block>
                          {currency && currency.length > 0 && currency.find((c: CurrencyProps) => (c.currency === "RUB"))?.sell}
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      </>
                      )
                  }
                </BccTableBody>
              </BccTable>
            </BccTableContainer>
          </div>

          <BccCardFull
            chips={[
              {
                title: "Мобильный банкинг",
                type: "outlined",
                color: "secondary",
              },
            ]}
            title="BCC.KZ"
            text={
              <>
                <BccTypography align="left" block type="p2" mb="32px">
                  Управляй банковскими счетами онлайн через браузер или
                  приложение
                </BccTypography>
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} alt="Приложение BCC.kz в AppStore"/>
                <img src={"/img/gp.svg"} alt="Приложение BCC.kz в GooglePlay"/>
              </>
            }
            bgImg="/img/mobile-app.svg"
          />
        </div>
      </div>
    </Layout>
  );
};

CurrencyPage.getInitialProps = async () => {
  const c = await api.main.getToken()
  const cc = await api.main.getCurrency(c.access_token)
  const currency = cc && cc.Rates
  
  return { currency }
}

export default CurrencyPage;
