import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccChip,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableHead,
  BccTableRow,
  BccTableBody,
} from "../../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "64px 48px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      chip: {
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
      },
      outerContentTable: {
        width: "100%",
        backgroundColor: "#ffffff",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "#fafafa",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 48px",
        margin: "0 auto",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      tableContainer: {
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        padding: "120px 48px 64px",
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
      details: {
        marginTop: 48,
        "& > div": {
          width: "30%",
        },
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
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      tableIcon: {
        display: "flex",
        alignItems: "center",
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "86px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      chip: {
        width: "maxContent",
        overflow: "scroll",
        flexWrap: "nowrap",
        display: "flex",
      },
      outerContentTable: {
        width: "100%",
        backgroundColor: "#ffffff",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "#fafafa",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "0 24px",
        margin: "0 auto",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      tableContainer: {
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        padding: "24px",
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
      details: {
        marginTop: 48,
        "& > div": {
          width: "30%",
        },
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
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
      tableIcon: {
        display: "flex",
        alignItems: "center",
      },
    },
    [theme.breakpoints.down("xs")]: {
      details: {
        flexWrap: "wrap",
        "& > div": {
          width: "100%",
        },
      },
    },
  })
);

const FaqPage = () => {
  const classes = useStyles({});

  const openLink = () => {
    window.open('https://www.bcc.kz/documents/rekvizity-neobkhodimye-dlya-popolneniya-karti.pdf', '_blank')
  }

  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <div className={classes.outerContent}>
            <div className={classes.contents}>
              <BccTypography type="h1" block mb="24px">
                Реквизиты АО “Банк Центркредит”
              </BccTypography>
              <div className={classes.chip}>
                <BccChip type="contained" color="secondary" mr="16px">
                  Общие реквизиты
                </BccChip>
                <BccChip type="outlined" color="secondary" onClick={openLink}>
                  Реквизиты для пополнения карточки
                </BccChip>
              </div>
              <Grid
                container
                className={classes.details}
                justify="flex-start"
                wrap="nowrap"
              >
                <Grid item>
                  <BccTypography type="h5" block mb="16px">
                    Наименование банка
                  </BccTypography>
                  <BccTypography type="p1" block mb="16px">
                    АО “Банк ЦентрКредит”
                  </BccTypography>
                </Grid>
                <Grid item>
                  <BccTypography type="h5" block mb="16px">
                    БИК банка
                  </BccTypography>
                  <BccTypography type="p1" block mb="16px">
                    KCJBKZKX
                  </BccTypography>
                </Grid>
                <Grid item>
                  <BccTypography type="h5" block mb="16px">
                    БИН банка
                  </BccTypography>
                  <BccTypography type="p1" block mb="16px">
                    980640000093
                  </BccTypography>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className={classes.outerContentTable}>
            <div className={classes.tableContainer}>
              <BccTableContainer>
                <BccTable className={classes.table}>
                  <BccTableHead>
                    <BccTableRow>
                      <BccTableCell className={classes.tableIcon}>
                        <BccTypography type="h6" mr="12px">
                          Филиал
                        </BccTypography>
                        <img src={"/img/search.svg"} />
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="h6">БИН</BccTypography>
                      </BccTableCell>
                      <BccTableCell></BccTableCell>
                    </BccTableRow>
                  </BccTableHead>
                  <BccTableBody>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Головной офис
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9806 4000 0093</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Алматинский городской филиал
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9811 4100 0668</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г. Нур-Султан
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9807 4100 0260</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г.Шымкент
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0135</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г.Актобе
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9010 4100 0015</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г.Атырау
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9807 4100 0191</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г.Актау
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9807 4100 0394</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г.Жезказган
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0323</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                          Филиал в г.Караганда
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0185</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Кокшетау
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9712 4100 0233</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Костанай
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0472</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Кызылорда
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9101 4100 0018</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Петропавловск
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0432</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Семей
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0244</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Тараз
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0046</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Талдыкорган
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9810 4100 2769</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Уральск
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0096</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                    <BccTableRow>
                      <BccTableCell>
                        <BccTypography type="p2" color="#80868C">
                        Филиал в г.Усть-Каменогорск
                        </BccTypography>
                      </BccTableCell>
                      <BccTableCell>
                        <BccTypography type="p2">9808 4100 0115</BccTypography>
                      </BccTableCell>
                    </BccTableRow>
                  </BccTableBody>
                </BccTable>
              </BccTableContainer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default FaqPage;
