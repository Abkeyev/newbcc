import Layout from "../../components/Layout";
import React from "react";
import { News } from "../../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccAlert,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
  BccCardFull,
} from "../../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto 64px",
        padding: "32px 48px 0",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      press: {
        color: "#4D565F",
        textDecoration: "underline",
      },
      alert: {
        marginBottom: 20,
      },
      subTitle: {
        marginBottom: 96,
      },
      document: {
        background: `url(${
          process.env.PUBLIC_URL + "/img/docBg.svg"
        }) no-repeat center top 46px`,
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        padding: "20px 96px 48px",
      },
      date: {
        color: "#B3B6BA",
        textAlign: "right",
      },
      docTitle: {
        textAlign: "center",
      },
      mailTo: {
        color: "#1F7042",
      },
      docText: {
        margin: "0 auto",
        width: "90%",
      },
      table: {
        "& td": {
          borderColor: "#CCCFD1",
        },
        "& th": {
          borderBottom: "none",
        },
        "& th:first-child": {
          paddingLeft: 0,
        },
        "& th:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
          textAlign: "right",
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      contacts: {
        width: "90%",
        margin: "0 auto",
        "& > div": {
          width: "calc(50% - 16px)",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      document: {
        padding: "20px 24px 48px",
      },
      subTitle: {
        marginBottom: 48,
      },
    },
    [theme.breakpoints.down("xs")]: {
      contents: {
        padding: "32px 24px 0",
      },
      subTitle: {
        marginBottom: 24,
      },
      docText: {
        width: "100%",
      },
      contacts: {
        width: "100%",
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
        },
      },
    },
  })
);

const CreditsRestructuringPage = () => {
  const classes = useStyles({});

  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <div className={classes.contents}>
            <BccTypography block type="p2" mb="46px">
              Пресс-служба
            </BccTypography>
            <BccTypography block type="h1" mb="12px">
              Отсрочка по выплатам
            </BccTypography>
            <BccTypography block type="p1" className={classes.subTitle}>
              для заемщиков МСБ сроком на 90 дней
            </BccTypography>
            <BccAlert severity="error" className={classes.alert}>
              Данные меры вводятся в связи с объявленным ранее режимом
              чрезвычайного положения
            </BccAlert>
            <div className={classes.document}>
              <BccTypography block type="p3" mb="48px" className={classes.date}>
                18 марта 2020
              </BccTypography>
              <BccTypography
                block
                type="h6"
                mb="30px"
                className={classes.docTitle}
              >
                Банк ЦентрКредит вводит отсрочку по выплатам для заемщиков МСБ
                сроком на 90 дней
              </BccTypography>
              <BccTypography
                block
                type="p2l"
                mb="30px"
                className={classes.docText}
              >
                Акционерное общество «Банк ЦентрКредит» (Далее – Банк) сообщает
                о предоставлении отсрочки по выплатам основного долга и
                вознаграждения на срок до 90 дней и пересмотра графика погашения
                задолженности для индивидуальных предпринимателей, а также для
                субъектов МСБ, у которых произошло ухудшение финансового
                состояния в связи с введением чрезвычайного положения.
                <br />
                <br />
                Для удобства клиентов МСБ в Банке разработана специальная форма,
                которую необходимо заполнить, подписать, отсканировать и
                отправить на электронный адрес:{" "}
                <a
                  href="mailto:restructuring@bcc.kz"
                  className={classes.mailTo}
                >
                  restructuring@bcc.kz
                </a>
                , или через Whatsapp по номеру телефона: +7 778 092 93 02.
                <br />
                <br />
                Форму можно скачать&nbsp;
                <a
                  href="mailto:restructuring@bcc.kz"
                  className={classes.mailTo}
                >
                  здесь
                </a>
                .
                <br />
                <br />
                Каждое письмо будет рассмотрено в индивидуальном порядке. Срок
                приема обращений – до 15.06.2020г.
                <br />
                <br />
                «Мы осознаем, что в нынешней ситуации большая нагрузка ложится
                на реальный сектор экономики, – рассказывает Председатель
                Правления Банка ЦентрКредит Галим Хусаинов. – В этой связи
                Банком ЦентрКредит вводится комплекс мер по смягчению долговой
                нагрузки наших заемщиков, чей бизнес пострадал в результате
                введения ограничений из-за введения режима ЧС. Сегодня Банк
                готов предоставить отсрочку по выплатам займов МСБ. Мы убеждены,
                что предпринятые действия поддержат наших бизнес-клиентов в
                нынешнее время. Ответственно заявляю, что все обращения по
                отсрочке будут рассмотрены. Благодарю клиентов за доверие и
                желаю им безболезненно пережить сложившуюся ситуацию».
                <br />
                <br />
                Всю дополнительную информацию о принятых мерах можно получить у
                менеджеров Банка, либо в Call-центре БЦК по телефонам:
              </BccTypography>
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.contacts}
              >
                <Grid item>
                  <BccTableContainer>
                    <BccTable className={classes.table}>
                      <BccTableHead>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography weight="bold" type="h6">
                              Для физических лиц
                            </BccTypography>
                          </BccTableCell>
                          <BccTableCell></BccTableCell>
                        </BccTableRow>
                      </BccTableHead>
                      <BccTableBody>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography type="p2">
                              С мобильного телефона
                            </BccTypography>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTypography block type="h6" mb="4px">
                              505
                            </BccTypography>
                            <BccTypography block type="p3">
                              Бесплатно
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography type="p2">
                              Для других стран
                            </BccTypography>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTypography type="h6">
                              +7 727 244-30-30
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>WhatsApp</BccTableCell>
                          <BccTableCell>
                            <BccTypography type="h6">
                              +7 701 223-02-28
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                      </BccTableBody>
                    </BccTable>
                  </BccTableContainer>
                </Grid>
                <Grid item>
                  <BccTableContainer>
                    <BccTable className={classes.table}>
                      <BccTableHead>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography weight="bold" type="p2">
                              Для юридических лиц
                            </BccTypography>
                          </BccTableCell>
                          <BccTableCell></BccTableCell>
                        </BccTableRow>
                      </BccTableHead>
                      <BccTableBody>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography type="p2">
                              С мобильного телефона
                            </BccTypography>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTypography type="h6" block mb="4px">
                              505
                            </BccTypography>
                            <BccTypography type="p3">Бесплатно</BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography type="p2">
                              Для других стран
                            </BccTypography>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTypography type="h6">
                              +7 727 244-30-30
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography type="p2">WhatsApp</BccTypography>
                          </BccTableCell>
                          <BccTableCell>
                            <BccTypography type="h6">
                              +7 701 223-02-28
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                      </BccTableBody>
                    </BccTable>
                  </BccTableContainer>
                </Grid>
              </Grid>
            </div>
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
                <img style={{ marginRight: 20 }} src={"/img/as.svg"} />
                <img src={"/img/gp.svg"} />
              </>
            }
            bgImg="/img/mobile-app.svg"
          />
          <News />
        </div>
      </div>
    </Layout>
  );
};
export default CreditsRestructuringPage;
