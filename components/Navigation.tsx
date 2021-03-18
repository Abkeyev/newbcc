import React from "react";
import { Grid, Select, MenuItem, InputAdornment } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  BccButton,
  BccTypography,
  BccTabs,
  BccTab,
  BccLink,
  BccInput
} from "./BccComponents";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuProps } from "../interfaces";
import { useTranslation } from 'react-i18next';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
        position: "relative",
        zIndex: 999,
      },
      innerSubContainer: {
        transition: "all .25s ease",
        padding: "12px 0",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
        "& button > span > a": { padding: 0 },
      },
      innerSubContainerContent: {
        position: "absolute",
        transition: "all .3s ease",
        backgroundColor: "white",
        zIndex: 998,
        width: "100%",
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
        "& > div": {
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "32px 48px",
          "& > div:first-child": {
            width: "100%",
            flexWrap: 'wrap',
            flexDirection: 'row',
            '& > div': {
              width: '20%',
              marginRight: '5%'
            },
            '& > div:nth-child(3n)': {
              marginRight: '30%'
            }
          },
        },
      },
      lastSub: {
        height: 80,
      },
      none: {
        minHeight: 0,
        height: 0,
        padding: 0,
        overflow: 'hidden'
      },
      innerContainer: {
        borderBottom: "1px solid #F3F3F3",
        backgroundColor: "white",
      },
      container: {
        maxWidth: 1280,
        padding: "0 48px",
        backgroundColor: "white",
        margin: "0 auto",
        boxSizing: "border-box",
      },
      logo: {
        maxWidth: 120,
        position: "relative",
        bottom: -2,
        marginRight: 32,
      },
      tab: {
        position: "relative",
        bottom: -2,
        "& > div > div": { flexWrap: "wrap" },
      },
      nav: {},
      subnav: {},
      select: {
        marginRight: 16,
        "& > div": {
          fontSize: 16,
          color: "#141414",
          opacity: 0.5,
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "& > div:focus": {
          backgroundColor: "white",
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
      searchText: {
        color: "#141414",
        opacity: 0.5,
        marginRight: 8,
      },
      searchIcon: {
        color: "#141414",
        opacity: 0.5,
      },
      customBtn: {
        borderColor: "#00A755!important",
        color: "#00A755!important",
        whiteSpace: "nowrap",
        "&:hover": {
          borderColor: "#00A755!important",
          color: "white!important",
          backgroundColor: "#00A755!important",
        },
      },
      mobileContainer: {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
        position: "relative",
        zIndex: 999,
      },
      innerSubContainer: {
        transition: "all .25s ease",
        padding: "12px 0",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "white",
        "& button > span > a": { padding: 0 },
      },
      innerSubContainerContent: {
        position: "absolute",
        transition: "all .3s ease",
        backgroundColor: "white",
        zIndex: 998,
        width: "100%",
        boxShadow: "0px 2px 7px rgba(0, 0, 0, 0.08)",
        "& > div": {
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "32px 48px",
          "& > div": {
            width: "30%",
          },
        },
      },
      none: {
        minHeight: 0,
        height: 0,
        padding: 0,
        overflow: 'hidden'
      },
      innerContainer: {
        borderBottom: "1px solid #F3F3F3",
      },
      container: {
        maxWidth: 1280,
        padding: "0 48px",
        margin: "0 auto",
        boxSizing: "border-box",
        backgroundColor: "white",
      },
      logo: {
        maxWidth: 120,
        position: "relative",
        bottom: -2,
        marginRight: 20,
      },
      tab: {
        position: "relative",
        bottom: -2,
        "& button": {
          marginRight: 20,
        },
        "& > div > div": { flexWrap: "wrap" },
      },
      nav: {},
      subnav: {},
      select: {
        marginRight: 16,
        ["@media (max-width:1060px)"]: {
          marginRight: 16,
        },
        "& > div": {
          padding: 0,
          fontSize: 16,
          color: "#141414",
          opacity: 0.5,
          ["@media (max-width:1060px)"]: {
            fontSize: 14,
          },
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "& > div:focus": {
          backgroundColor: "white",
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
      searchText: {
        color: "#141414",
        opacity: 0.5,
        marginRight: 8,
        ["@media (max-width:1060px)"]: {
          fontSize: 14,
        },
      },
      searchIcon: {
        color: "#141414",
        opacity: 0.5,
      },
      customBtn: {
        borderColor: "#00A755!important",
        color: "#00A755!important",
        "&:hover": {
          borderColor: "#00A755!important",
          color: "white!important",
          backgroundColor: "#00A755!important",
        },
      },
      mobileContainer: {
        display: "none",
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        display: "none",
      },
      logo: {
        maxWidth: 120
      },
      select: {
        marginRight: 0,
        "& > div": {
          fontSize: 16,
          fontWeight: 500,
          color: "#000D1A",
          opacity: 1,
        },
        "& > svg": {
          color: "#000D1A",
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: 0,
        },
        "& > div:focus": {
          backgroundColor: "transparent",
        },
        "&::after, &::before": {
          borderBottom: 0,
        },
      },
      mobLang: {
        position: "absolute",
        top: 20,
        right: 20,
        zIndex: 1001,
      },
      logoMob: {
        height: 24,
        width: "auto",
      },
      searchIcon: {
        height: 24,
        width: 24,
        opacity: 1,
      },
      tab: {
        position: "relative",
        bottom: -2,
        "& button": {
          marginRight: 20,
          height: 64,
          "& a": {
            padding: 0,
            fontSize: 16,
          },
        },
        '& > div > div': {
          flexWrap: 'nowrap'
        }
      },
      mobileApps: {
        display: "flex",
        alignItems: "center",
        "& > img": {
          maxWidth: 100,
        },
      },
      mobileContainer: {
        display: "block",
        position: "fixed",
        width: "100%",
        zIndex: 1000,
        height: 56,
        top: 0,
        transition: "all .75s ease",
        "& > div": {
          backgroundColor: "#FFFFFF",
          height: 56,
          top: 0,
          right: 0,
          left: 0,
          position: "relative",
          overflow: "hidden",
          transition: "all .75s ease",
          boxShadow:
            "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
          "& > div:first-child": {
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            justifyContent: "space-between",
            height: 56,
            width: "100%",
            padding: "12px 20px",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 99,
            boxShadow:
              "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
            "& > div": {
              width: '33%',
              textAlign: 'center'
            },
            "& > div:first-child": {
              textAlign: 'left'
            },
            "& > div:last-child": {
              textAlign: 'right'
            },
            "& > div:first-child > div:first-child": {
              position: "relative",
              width: 20,
              height: 12,
              "& > img:last-child": {
                top: 10,
              },
              "& > img": {
                position: "absolute",
                width: 20,
                height: 2,
                top: 0,
                right: 0,
                left: 0,
                transform: "rotate(0)",
                transition: "all .75s ease",
              },
            },
          },
          "& > div:last-child": {
            backgroundColor: "#ffffff",
            width: "100%",
            boxSizing: "border-box",
            padding: "20px 0 0",
            overflowY: "scroll",
            height: "calc(100vh - 56px)",
            "& > div:first-child": {
              width: "auto",
              height: "auto",
              background: "none",
              marginBottom: 0,
              marginTop: 0,
              padding: "0 20px",
              "& > div": {
                width: "auto",
                height: "auto",
                padding: 0,
                minHeight: 0,
                visibility: "visible",
                "& > div": {
                  margin: 0,
                  "& > span:first-child": {
                    display: "block",
                    position: "absolute",
                    left: 0,
                    width: 0,
                    height: 20,
                    borderRadius: 1,
                    background: "white",
                  },
                  "& > span:last-child": {
                    paddingLeft: 20,
                  },
                  "& > div:last-child": {
                    backgroundColor: "white",
                  },
                  "& > div": {
                    "& > div": {
                      "& > div": {
                        display: "block",
                        padding: 0,
                      },
                    },
                  },
                },
              },
            },
            "& > div:nth-child(2)": {
              borderBottom: "1px solid #CCCFD1",
              padding: "0 20px",
            },
            "& > div:nth-child(3)": {
              backgroundColor: "white",
              "& > span": {
                padding: "20px 20px",
                borderBottom: "1px solid #F3F3F3",
              },
              "& > span:last-child": {
                borderBottom: "none",
              },
            },
            "& > div:last-child": {
              padding: "20px",
              backgroundColor: "white",
              width: "100%",
              boxSizing: "border-box",
            },
          },
        },
      },
      active: {
        width: "2.5px!important",
      },
      open: {
        "& > div": {
          height: "100vh",
          position: "relative",
          "& > div:first-child": {
            "& > div:first-child": {
              "& > img:first-child": {
                transform: "rotate(45deg)",
              },
              "& > img:last-child": {
                transform: "rotate(-45deg)",
                top: 0,
              },
            },
          },
          "& > div:last-child": {
            "& > div:first-child": {
              display: "flex",
              alignItems: "center",
            },
          },
        },
      },
      subMenu: {
        height: 60,
        padding: "18px 20px",
        borderBottom: "1px solid #F3F3F3",
      },
      subSubMenu: {
        padding: "0 20px 8px",
      },
      imgSSArrow: {
        display: "inline-block",
        marginLeft: 12,
        verticalAlign: "middle",
      },
      searchInput: {
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
        borderRadius: 8,
        '& > div': {
          border: '0!important',
          borderRadius: '8px!important',
        },
        '& > div > div': {
          marginTop: '0!important',
          opacity: .6
        },
        '& input': {
          padding: '10px 12px'
        }
      }
    },
    [theme.breakpoints.down("xs")]: {},
    creditCard: {
      maxWidth: 200,
      float: 'right'
    },
    footLink: {
      textDecoration: "none",
      color: "initial",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    link: {
      "&:hover": {
        color: "#000D1A",
      },
    },
  })
);

interface NavigationProps {
  nav: MenuProps[];
}

const Navigation = (props: NavigationProps) => {
  let { nav } = props
  const { t, i18n } = useTranslation();
  if(nav && nav.length === 0)
    nav = [{
        id: 0,
        inverseParentHeadNavigation: [],
        isdropdown: false,
        isexternal: false,
        link: "",
        title: "",
    }]
  const [index, setIndex] = React.useState(0);
  const [menu, openMenu] = React.useState(false);
  const [menuIndex, setMenuIndex] = React.useState(-1);
  const [subMenuIndex, setSubMenuIndex] = React.useState(-1);
  const classes = useStyles({});
  const router = useRouter();

  React.useEffect(() => {
    if(!menu) {
      setMenuIndex(-1)
      setSubMenuIndex(-1)
    }
  }, [menu])
  
  const getSubmenu = (): MenuProps => {
    const sub = nav && nav.find((n: MenuProps) => n.link === router.pathname);
    if(sub !== undefined)
      return sub
    else if(nav && nav[0]) {
      return nav[0]
    } else return {
      id: 0,
      inverseParentHeadNavigation: [],
      isdropdown: false,
      isexternal: false,
      link: "",
      title: "",
    }
  };

  const goToLink = (index: number, isSub: boolean) => {
    setMenuIndex(-1);
    setSubMenuIndex(-1);
    if (isSub) {
      setMenuIndex(index);
    } else {
      setIndex(index);
    }
  };

  const getIndex = () => {
    let i = 0;
    nav && nav.length > 0 && nav.map((n: MenuProps, index: number) => {
      router.pathname === n.link ? (i = index) : "";
    });
    return i;
  };

  return (
    <>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <div className={classes.container}>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  justify="space-between"
                  wrap="nowrap"
                  alignItems="center"
                  onMouseEnter={() => {
                    setMenuIndex(-1);
                    setSubMenuIndex(-1);
                  }}
                >
                  <Grid item>
                    <Link shallow href="/">
                      <a onClick={() => openMenu(false)}>
                        <img
                          className={classes.logo}
                          src={"/img/logo.svg"}
                          alt={t('bcct')}
                        />
                      </a>
                    </Link>
                  </Grid>
                  <Grid item>
                    <BccTabs value={getIndex()} className={classes.tab}>
                      {nav &&
                        nav.map((n: any, i: number) => {
                          return (
                            <BccTab
                              label={
                                <Link shallow href={n.link}>
                                <a onClick={() => openMenu(false)}>{n.title}</a>
                                </Link>
                              }
                              value={i}
                              key={`tab${i}`}
                            />
                          );
                        })}
                    </BccTabs>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  justify="space-between"
                  wrap="nowrap"
                  alignItems="center"
                >
                  <Grid item>
                    <Select className={classes.select} value={i18n.language} onClick={(e: any) => {
                      if(e.target.value === 'ru' || e.target.value === 'kz' || e.target.value === 'en') {
                        i18n.changeLanguage(e.target.value)
                        cookies.set('lang', e.target.value)
                        router.replace(router.asPath)
                      }
                    }}>
                      <MenuItem value="ru">РУС</MenuItem>
                      <MenuItem value="kz">ҚАЗ</MenuItem>
                      <MenuItem value="en">ENG</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item>
                    <BccTypography className={classes.searchText} type="p2">
                      {t('search')}
                    </BccTypography>
                  </Grid>
                  <Grid item>
                    <img
                      className={classes.searchIcon}
                      src={"/img/search.svg"}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.innerSubContainer}>
          <div className={classes.container}>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
            >
              <Grid item>
                <BccTabs
                  onChange={(event: any, index: number) => {
                    console.log(event)
                    goToLink(index, true);
                  }}
                  className={classes.tab}
                >
                  {getSubmenu().inverseParentHeadNavigation &&
                    getSubmenu().inverseParentHeadNavigation.map(
                      (n: any, i: number) => {
                        return (
                          <BccTab
                            label={
                              !n.isexternal ? (
                                <Link shallow href={n.link}>
                                <a onClick={() => openMenu(false)}>{n.title}</a>
                                </Link>
                              ) : (
                                <BccLink href={n.link}>
                                  {n.title}
                                </BccLink>
                              )
                            }
                            onMouseEnter={() => {
                              if (n.isdropdown) {
                                setMenuIndex(i);
                              }else setMenuIndex(-1)
                            }}
                            value={i}
                          />
                        );
                      }
                    )}
                </BccTabs>
              </Grid>
              <Grid item>
                <BccLink
                  href="https://m.bcc.kz/prelogin?path=/home"
                  target="_blank"
                >
                  <BccButton
                    variant="outlined"
                    color="secondary"
                    className={classes.customBtn}
                  >
                    {t('ib')}
                  </BccButton>
                </BccLink>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
          setMenuIndex(-1);
          setSubMenuIndex(-1);
        }}
        className={`${classes.innerSubContainerContent} ${
          menuIndex === -1 ? classes.none : ""
        }`}
      >
          <Grid container justify="space-between" wrap="nowrap">
            <Grid item container direction="column" wrap="nowrap">
              {getSubmenu().inverseParentHeadNavigation[menuIndex] &&
                getSubmenu().inverseParentHeadNavigation[
                  menuIndex
                ].inverseParentHeadNavigation.map((nip: any) => {
                  return (
                    <Grid item>
                      <BccTypography color="#4D565F" type="p2" mb="20px" block>
                        {!nip.isexternal ? (
                          <Link shallow href={nip.link}>
                          <a onClick={() => openMenu(false)}>{nip.title}</a>
                          </Link>
                        ) : (
                          <BccLink href={nip.link}>
                            {nip.title}
                          </BccLink>
                        )}
                      </BccTypography>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
      </div>
      <div className={`${classes.mobileContainer} ${menu ? classes.open : ""}`}>
        <div>
          <div>
            <div>
              <div onClick={() => openMenu(!menu)}>
                <img src={"/img/menu-item.svg"} />
                <img src={"/img/menu-item.svg"} />
              </div>
            </div>
            <div>
              <Link shallow href="/">
                <a onClick={() => openMenu(false)}>
                  <img className={classes.logoMob} src={"/img/logo.svg"} alt={t('bcct')}/>
                </a>
              </Link>
            </div>
            <div>
              <BccButton
                variant="outlined"
                color="secondary"
                size="small"
              >
                {t('signin')}
              </BccButton>
            </div>
          </div>
          <div>
            <Grid
              container
              justify="space-between"
              wrap="nowrap"
              alignContent="center"
            >
              <Grid item>
                <BccInput
                  variant="filled"
                  size="small"
                  placeholder="Поиск"
                  className={classes.searchInput}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={"/img/search.svg"} />
                      </InputAdornment>
                    ),
                  }}
                />
                  {/* <BccButton
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<img src={"/img/ib-mob.svg"} />}
                  >
                    Интернет-банк
                  </BccButton> */}
              </Grid>
              <Grid item>
                <Select className={classes.select} value="ru">
                  <MenuItem value="ru">РУС</MenuItem>
                  <MenuItem value="kz">ҚАЗ</MenuItem>
                  <MenuItem value="en">ENG</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <div>
              <BccTabs
                value={index}
                key={`lang${index}`}
                onChange={(event: any, index: number) => {
                  console.log(event)
                  openMenu(false);
                  goToLink(index, false);
                }}
                className={classes.tab}
              >
                {nav &&
                  nav.map((n: any, i: number) => {
                    return (
                      <BccTab
                        key={`nav${i}`}
                        label={
                          !n.isexternal ? (
                            <Link shallow href={n.link}>
                              <a onClick={() => openMenu(false)}>{n.title}</a>
                            </Link>
                          ) : (
                            <BccLink href={n.link}>
                              {n.title}
                            </BccLink>
                          )
                        }
                        value={i}
                      />
                    );
                  })}
              </BccTabs>
            </div>
            <div>
              {getSubmenu().inverseParentHeadNavigation.map(
                (nn: any, ii: number) => {
                  return (
                    <>
                      <Grid
                        container
                        justify="space-between"
                        className={classes.subMenu}
                        style={{
                          borderBottom:
                            ii === menuIndex ? "none" : "1px solid #F3F3F3",
                        }}
                        alignItems="center"
                        wrap="nowrap"
                        onClick={() =>
                          menuIndex === ii
                            ? setMenuIndex(-1)
                            : setMenuIndex(ii)
                        }
                      >
                        <Grid item>
                          <BccTypography type="h6" block>
                            {!nn.isexternal ? (
                              <Link shallow href={nn.link}>
                                <a onClick={() => openMenu(false)}>{nn.title}</a>
                              </Link>
                            ) : (
                              <BccLink href={nn.link}>
                                {nn.title}
                              </BccLink>
                            )}
                          </BccTypography>
                        </Grid>
                        <Grid item>
                          {nn.isdropdown && (
                            <img
                              src={`/img/menu-arrow${
                                ii === menuIndex ? "-open" : ""
                              }.svg`}
                            />
                          )}
                        </Grid>
                      </Grid>
                      {ii === menuIndex &&
                        getSubmenu().inverseParentHeadNavigation[
                          menuIndex
                        ].inverseParentHeadNavigation.map(
                          (subSubMenu: any, ssmi: number) => {
                            return (
                              <>
                                <Grid
                                  container
                                  direction="column"
                                  className={classes.subSubMenu}
                                  style={{
                                    borderBottom:
                                      ii === menuIndex &&
                                      ssmi ===
                                        getSubmenu()
                                          .inverseParentHeadNavigation[
                                          menuIndex
                                        ].inverseParentHeadNavigation.length -
                                          1
                                        ? "1px solid #F3F3F3"
                                        : "none",
                                  }}
                                >
                                  <Grid item>
                                    <BccTypography
                                      color="#80868C"
                                      type={subSubMenu.ismuted ? "p4" : "p2"}
                                      mb="12px"
                                      block
                                    >
                                      {!subSubMenu.isexternal ? (
                                        <Link shallow href={subSubMenu.link}>
                                        <a onClick={() => openMenu(false)}>{subSubMenu.title}</a>
                                        </Link>
                                      ) : (
                                        <BccLink
                                          href={subSubMenu.link}
                                        >
                                          {subSubMenu.title}
                                        </BccLink>
                                      )}
                                    </BccTypography>
                                    {subSubMenu.inverseParentHeadNavigation
                                      .length > 0 &&
                                      subSubMenu.inverseParentHeadNavigation.map(
                                        (subSubSubMenu: any, index: number) => {
                                          return (
                                            <div
                                              onClick={() =>
                                                setSubMenuIndex(index)
                                              }
                                            >
                                              <BccTypography
                                                mb={
                                                  subSubMenu
                                                    .inverseParentHeadNavigation
                                                    .length -
                                                    1 ===
                                                  index
                                                    ? "0"
                                                    : "20px"
                                                }
                                                color="#000D1A"
                                                type="p2"
                                                block
                                              >
                                                {!subSubSubMenu.isexternal ? (
                                                  <Link
                                                    href={subSubSubMenu.link}
                                                  >
                                                  <a onClick={() => openMenu(false)}>{subSubSubMenu.title}</a>
                                                  </Link>
                                                ) : (
                                                  <BccLink
                                                    href={subSubSubMenu.link}
                                                  >
                                                    {subSubSubMenu.title}
                                                  </BccLink>
                                                )}
                                                {subSubSubMenu.inverseParentHeadNavigation &&
                                                  subSubSubMenu
                                                    .inverseParentHeadNavigation
                                                    .length > 0 && (
                                                    <img
                                                      className={
                                                        classes.imgSSArrow
                                                      }
                                                      src={
                                                        process.env.PUBLIC_URL +
                                                        `/img/submenu-arrow${
                                                          index ===
                                                          subMenuIndex
                                                            ? "-open"
                                                            : ""
                                                        }.svg`
                                                      }
                                                    />
                                                  )}
                                              </BccTypography>
                                              {subMenuIndex === index &&
                                                subSubSubMenu.inverseParentHeadNavigation.map(
                                                  (
                                                    sssn: any,
                                                    sssni: number
                                                  ) => {
                                                    return (
                                                      <BccTypography
                                                        type="p3"
                                                        mt={
                                                          sssni === 0
                                                            ? "11px"
                                                            : "0"
                                                        }
                                                        color="#80868C"
                                                        mb={
                                                          sssni ===
                                                          subSubSubMenu
                                                            .inverseParentHeadNavigation
                                                            .length -
                                                            1
                                                            ? "20px"
                                                            : "8px"
                                                        }
                                                        ml="12px"
                                                        block
                                                      >
                                                        {!sssn.isexternal ? (
                                                          <Link
                                                            href={sssn.link}
                                                          >
                                                          <a onClick={() => openMenu(false)}>{sssn.title}</a>
                                                          </Link>
                                                        ) : (
                                                          <BccLink
                                                            href={sssn.link}
                                                          >
                                                            {sssn.title}
                                                          </BccLink>
                                                        )}
                                                      </BccTypography>
                                                    );
                                                  }
                                                )}
                                            </div>
                                          );
                                        }
                                      )}
                                  </Grid>
                                </Grid>
                              </>
                            );
                          }
                        )}
                    </>
                  );
                }
              )}
            </div>
            <div>
              <Grid container wrap="nowrap" style={{ marginBottom: 16 }}>
                <Grid item>
                  <img src={"/img/callus.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h4" ml="16px" block mb="8px">
                    <a
                      href="tel:505"
                      className={classes.footLink}
                    >
                      505
                    </a>
                  </BccTypography>
                  <BccTypography type="p3" ml="16px" block>
                    {t('free')}
                  </BccTypography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item>
                  <img src={"/img/wp.svg"} />
                </Grid>
                <Grid item>
                  <BccTypography type="h4" ml="16px" block mb="8px">
                    <a
                      onClick={() => window.open("https://wa.me/77012230228", "_blank")}
                      className={classes.footLink}
                    >
                      +7 (701) 223-02-28
                    </a>
                  </BccTypography>
                  <BccTypography type="p3" ml="16px" block>
                    WhatsApp
                  </BccTypography>
                </Grid>
              </Grid>
              <BccTypography
                type="p2"
                weight="medium"
                block
                mt="12px"
                mb="20px"
                className={classes.mobileApps}
              >
                {t('available')}{" "}
                <img
                  style={{ marginLeft: 8, marginRight: 8, cursor: 'pointer' }}
                  onClick={() => window.open("https://apps.apple.com/kz/app/starbanking/id743617904", "_blank")}
                  src={"/img/as.svg"}
                  alt="AppStore"
                />
                <img src={"/img/gp.svg"}
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open("https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru", "_blank")}
                   alt="GooglePlay"/>
              </BccTypography>
              <BccTypography type="p1" mr="20px">
                <BccLink
                  href="https://www.instagram.com/centercreditkz"
                  target="_blank"
                >
                  <img src={"/img/ig_m.svg"} />
                </BccLink>
              </BccTypography>
              <BccTypography type="p1" mr="20px">
                <BccLink href="https://facebook.com/bcc.kz" target="_blank">
                  <img src={"/img/fb_m.svg"} />
                </BccLink>
              </BccTypography>
              <BccTypography type="p1">
                <BccLink
                  href="https://www.youtube.com/user/bcckz"
                  target="_blank"
                >
                  <img src={"/img/yb_m.svg"} />
                </BccLink>
              </BccTypography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
