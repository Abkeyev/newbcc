import React from "react";
import Layout from "../../components/Layout";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem'
import {
  BccTypography,
  BccChip,
  BccTabs,
  BccTab,
  BccSwitch,
  BccInput
} from "../../components/BccComponents";
import {
  YMaps,
  Map as Maps,
  Placemark,
  ZoomControl,
  FullscreenControl,
} from "react-yandex-maps";
import api from '../../api/Api'

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
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 48px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA", marginLeft: 16 },
      active: { color: "#27AE60" },
      mapContainer: {
        position: "relative",
        margin: "0 auto",
        padding: "32px 48px 64px",
        maxWidth: 1280,
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "80px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1280,
        margin: "0 auto",
        boxSizing: "border-box",
        padding: "0 24px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        position: "relative",
        margin: "0 auto",
        padding: "32px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
        "& > img": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      tabsBranch: {
        flexWrap: "wrap-reverse",
        "& > div:last-child": {
          width: "100%",
          order: 1,
          display: "flex",
          justifyContent: "space-between",
          margin: "12px 0",
        },
      },
    },
    input: {
      '& > div > div': {
        backgroundColor: '#fafafa',
        padding: '4px 0',
        paddingRight: '0!important',
        borderBottom: "1px dashed #4D565F",
        borderRadius: 0
      },
      '& > div > fieldset': {
        border: 'none'
      },
      '& > div > svg': {
        display: 'none'
      }
    },
    info: {
      backgroundColor: 'red'
    }
  })
);

const cities = [
  "Нур-Султан",
  "Алматы",
  "Шымкент",
  "Актау",
  "Жанаозен",
  "Актобе",
  "Атырау",
  "Кульсары",
  "Жезказган",
  "Сатпаев",
  "Караганда",
  "Темиртау",
  "Балхаш",
  "Кокшетау",
  "Степногорск",
  "Костанай",
  "Рудный",
  "Затобольск",
  "Кызылорда",
  "Шиели",
  "Павлодар",
  "Экибастуз",
  "Петропавловск",
  "Семей",
  "Шемонаиха",
  "Аягоз",
  "Талдыкорган",
  "Отеген батыр",
  "Капшагай",
  "Талгар",
  "Каскелен",
  "Жаркент",
  "Тараз",
  "Шу",
  "Уральск",
  "Аксай",
  "Усть-Каменогорск",
  "Зайсан",
  "Алтай",
  "Риддер",
  "Сарыагаш",
  "Аксу",
];

const BranchesPage = () => {
  const [index, setIndex] = React.useState<number>(0);
  const [data, setData] = React.useState([]);
  const [city, setCity] = React.useState("Алматы")
  const [switchBtn, setSwitchBtn] = React.useState(true);
  const classes = useStyles({});
  React.useEffect(() => {
    api.main.getBranches(index === 1 ? 'branches' : 'atms').then((res) => res.Data && setData(res.Data))
  }, [index]);
  return (
    <Layout title="Офисы и банкоматы">
      <div className="main-page">
        <div className="container">
          <div className={classes.outerContent}>
            <div className={classes.contents}>
              <BccTypography type="h2" block mb="24px">
                Офисы и банкоматы
              </BccTypography>
              <BccChip type="contained" color="secondary" mr="16px">
                Физическим лицам
              </BccChip>
              <BccChip type="outlined" color="secondary">
                Бизнесу
              </BccChip>
            </div>
          </div>
          <div className={classes.tabsBranch}>
            <BccTabs
              value={index}
              onChange={(e: any, index: number) => {
                console.log(e);
                setIndex(index);
              }}
              className={classes.tab}
            >
              <BccTab label="Отделения" />
              <BccTab label="Банкоматы" />
              {/* <BccTab label="Терминалы" /> */}
            </BccTabs>
            <div>
            <BccInput
              id="city"
              name="city"
              value={city}
              onChange={(e: any) => e.target.value && setCity(e.target.value)}
              variant="outlined"
              className={classes.input}
              select
            >
              {cities.map(
                  (c: string) => <MenuItem value={c}>{c}</MenuItem>)
              }
            </BccInput>
              <BccTypography type="p2" className={classes.switch}>
                <span className={!switchBtn ? classes.active : ""}>
                  Списком
                </span>
                <BccSwitch
                  checked={switchBtn}
                  onChange={() => setSwitchBtn(!switchBtn)}
                />
                <span className={switchBtn ? classes.active : ""}>
                  На карте
                </span>
              </BccTypography>
            </div>
          </div>
          <div className={classes.outerContent}>
            <div className={classes.mapContainer}>
            <YMaps>
            <Maps
              width="100%"
              height="500px"
              clu
              defaultState={{
                zoom: 12,
                controls: [],
                center: city === 'Алматы' ? [43.2360659,76.893174] : city === 'Нур-Султан' ? [51.1480774,71.3393073] : [42.341926,69.5197658],
              }}
              state={{
                zoom: 12,
                controls: [],
                center: city === 'Алматы' ? [43.2360659,76.893174] : city === 'Нур-Султан' ? [51.1480774,71.3393073] : [42.341926,69.5197658],
              }}
            >
              <FullscreenControl />
              <ZoomControl options={{ float: "right" }} />
              {data.length > 0 && data.map((d: any) => (
                <Placemark
                  geometry={[d.geolocation.geographicCoordinates.latitude, d.geolocation.geographicCoordinates.longitude]}
                  options={{
                    iconImageHref:"/img/pin.png",
                    iconImageSize: [25, 39],
                    iconLayout: "default#image",
                  }}
                />
              ))}
              {/* {item !== null && (<div className={classes.info}>
                <BccTypography type="p2">
                  {item !== null && item.address.addressLine}
                </BccTypography>
              </div>)} */}
              </Maps>
              </YMaps>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BranchesPage;
