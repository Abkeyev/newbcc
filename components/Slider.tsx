import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
import { BccButton, BccTypography, BccBreadcrumbs } from "../components/BccComponents";
import { SliderPageProps, SliderProps, Breadcrumbs } from "../interfaces";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      outerContainer: {
        backgroundSize: "cover!important",
        paddingBottom: "20px",
      },
      mobileSliderImg: {
        display: 'none'
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        maxWidth: 1280,
        height: 480,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 20,
      },
      sliderSubTitle: {
        marginBottom: 136,
        color: "#4D565F",
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: 350,
        position: "absolute",
        bottom: 96,
      },
      slider: {
        width: "100%",
        overflow: "hidden",
        paddingTop: 20,
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "46px 0 64px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          "& > img": {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "auto",
            maxHeight: "400px",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      breadcrumbs: {
        paddingTop: 46,
        '& > nav': {
          minHeight: 25
        }
      }
    },
    [theme.breakpoints.down("md")]: {
      outerContainer: {
        backgroundSize: "cover!important",
        backgroundPositionX: "center!important",
        paddingBottom: "20px"
      },
      mobileSliderImg: {
        display: 'none'
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        height: 480,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 20,
      },
      sliderSubTitle: {
        marginBottom: 136,
        color: "#4D565F",
      },
      sliderBtn: {
        minWidth: 300,
        bottom: 96,
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        position: "absolute",
      },
      slider: {
        width: "100%",
        overflow: "hidden",
        paddingTop: 20,
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "46px 0 64px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          "& > img": {
            position: "absolute",
            right: "-40%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxHeight: "300px",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      breadcrumbs: {
        paddingTop: 46,
        '& > nav': {
          minHeight: 25
        }
      }
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        marginTop: 56,
        backgroundColor: 'white'
      },
      mobileSliderImg: {
        display: 'none'
      },
      sliderBtn: {
        minWidth: 250,
        bottom: "initial",
        position: "relative",
      },
      sliderSubTitle: {
        marginBottom: 64,
      },
      slide: {
        "& > div:first-child": {
          padding: "96px 0 40px",
        },
      },
      container: {
        height: "auto",
        padding: "0 20px",
      },
      breadcrumbs: {
        display: 'none'
      }
    },
    [theme.breakpoints.down("xs")]: {
      container: {
        height: "auto",
        padding: "0",
      },
      outerContainer: {
        padding: 0
      },
      mobileSliderImg: {
        display: 'block',
        height: 190,
        backgroundSize: 'cover!important'
      },
      slider: {
        padding: '0 20px',
      },
      sliderBtn: {
        height: 56,
        fontSize: 16,
        minWidth: "none",
        width: "100%",
        boxSizing: "border-box",
        bottom: "initial",
        position: "relative",
      },
      sliderSteps: {
        width: 94,
        left: "calc(50% - 47px)",
        bottom: 28
      },
      sliderSubTitle: {
        marginBottom: 16,
      },
      slideRight: { display: "none" },
      slideLeft: { display: "none" },
      slide: {
        flexDirection: "column-reverse",
        flexWrap: "wrap",
        "& > div:first-child": {
          width: "100%",
          padding: "0 0 62px",
        },
        "& > div:last-child": {
          marginTop: 24,
          width: "100%",
          "& > img": {
            position: "relative",
            width: "100%",
            maxWidth: "none",
            top: "initial",
            right: "initial",
            transform: "none",
          },
        },
      },
    },
  })
);

const Slider = (props: SliderPageProps) => {
  const { slider, breadcrumbs } = props
  const [slideIndex, setSlideIndex] = React.useState(0);
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("xs"));

  const [touchStart, setTouchStart] = React.useState(0)
  const [touchEnd, setTouchEnd] = React.useState(0)

  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  }
  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      slideArrow(true)
    }
    if (touchStart - touchEnd < -150) {
      slideArrow(false)
    }
  }

  const minSlide = 0;
  const maxSlide = slider && slider.length - 1;

  const slideArrow = (isNext: boolean) => {
    if (isNext) {
      if (slideIndex + 1 > maxSlide) {
        setSlideIndex(minSlide);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    } else {
      if (slideIndex - 1 < minSlide) {
        setSlideIndex(maxSlide);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    }
  };
  const classes = useStyles({});
  let bgStyle = {}
  let bgSmallStyle = {}
  if(slider && slider[slideIndex]) {
    if(small){
      bgSmallStyle = {
        background: `url(http://188.227.84.200:3005/images/${encodeURIComponent(slider[slideIndex].slider.image)}) no-repeat right center`,
      }
    }else{
      if(slider[slideIndex].slider.isFull) {
        bgStyle = {
          background: `url(http://188.227.84.200:3005/images/${encodeURIComponent(slider[slideIndex].slider.image)}) no-repeat ${slider[slideIndex].slider.backgroundColor}`,
        }
      }else {
        bgStyle = {
          backgroundColor: slider[slideIndex].slider.backgroundColor
        }
      }
    }
  }

  return (
    <div
      className={classes.outerContainer}
      style={bgStyle}
    >
      <div className={classes.container}
        onTouchStart={e => handleTouchStart(e)}
        onTouchMove={e => handleTouchMove(e)}
        onTouchEnd={() => handleTouchEnd()}
      >
        <div className={classes.breadcrumbs} style={{ opacity: breadcrumbs && breadcrumbs.length > 0 ? 1 : 0 }}>
          <BccBreadcrumbs>
            {
              breadcrumbs && breadcrumbs.length > 0 && breadcrumbs.map((b: Breadcrumbs) => (
                <BccTypography type="p3" td={b.link === null ? "none" : "underline"} color={b.link === null ? '#80868C' : 'inherit'}>
                  {b.link === null ? b.title : b.isExternal ? <a href={b.link}>{b.title}</a> : <Link href={b.link}>{b.title}</Link>}
                </BccTypography>
              ))
            }
          </BccBreadcrumbs>
        </div>
        <div className={classes.mobileSliderImg} style={bgSmallStyle}/>
        <div className={classes.sliderSteps}>
          {slider && slider.length > 1 && (
            <img
              className={classes.slideLeft}
              src={"/img/slide-left.svg"}
              onClick={() => slideArrow(false)}
            />
          )}
          {slider && slider.length > 1
            ? (slider as SliderProps[]).map((slide: SliderProps, index: number) => {
                return (
                  <div
                    key={`step${slide.slider.title}`}
                    className={`${classes.sliderStep} ${
                      slideIndex === index ? classes.active : ""
                    }`}
                    onClick={() => setSlideIndex(index)}
                  ></div>
                );
              })
            : ""}

          {slider && slider.length > 1 && (
            <img
              className={classes.slideRight}
              src={"/img/slide-right.svg"}
              onClick={() => slideArrow(true)}
            />
          )}
        </div>
        <div className={classes.slider}>
          <div>
            {slider && slider.length > 0 &&
              (slider as SliderProps[]).map((slide: SliderProps, index: number) => {
                return slideIndex === index ? (
                  <div
                    className="animate__animated animate__fadeIn"
                    key={`animatedSlider${index}`}
                  >
                    <Grid
                      container
                      justify="space-between"
                      key={`slide${index}`}
                      wrap="nowrap"
                      className={classes.slide}
                    >
                      <Grid item>
                        <BccTypography
                          type="h1"
                          block
                          className={classes.slderTitle}
                        >
                          {slide.slider.title}
                        </BccTypography>
                        <BccTypography
                          type="p1"
                          block
                          className={classes.sliderSubTitle}
                        >
                          {slide.slider.subtitle}
                        </BccTypography>
                        {slide.button !== null && (
                          <BccButton
                            variant={slide.button.buttonType}
                            key={`sliderBtn${slide.button.id}`}
                            color={slide.button.buttonColor}
                            className={classes.sliderBtn}
                            href={slide.button.buttonLink}
                          >
                            {slide.button.buttonText}
                          </BccButton>
                        )}
                      </Grid>
                      {!slide.slider.isFull && !small && (<Grid item>
                        <img
                          src={`http://188.227.84.200:3005/images/${slide.slider.image}`}
                          alt="slide1"
                        />
                      </Grid>)}
                    </Grid>
                  </div>
                ) : (
                  ""
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
