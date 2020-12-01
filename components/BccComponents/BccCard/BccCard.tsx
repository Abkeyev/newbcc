import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccChip, BccTypography, BccButton, BccLink } from "..";
import Link from "next/link";
import { ChipsProps, ButtonsProps } from "../../../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("xl")]: {
      card: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        overflow: "hidden",
        "& > div:first-child": {
          backgroundPositionX: "center",
        },
      },
      title: {
        marginBottom: 16,
      },
      text: {
        marginBottom: 20,
      },
      horizontalText: {
        marginBottom: 48,
      },
      horizontal: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        height: "auto",
        "& > div:first-child": {
          width: "30%",
        },
        "& > div:last-child": {
          width: "70%",
        },
      },
      fullImg: {},
      horizontalImg: {
        minHeight: 200,
        order: 1,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        "& > img": {
          display: "block",
          width: "100%",
          margin: "0 auto",
        },
      },
      img: {
        minHeight: 192,
        display: "flex",
        alignItems: "center",
        "& > img": {
          display: "block",
          width: "40%",
          margin: "0 auto",
        },
      },
      contentCard: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      chip: {
        marginRight: 8,
        marginBottom: 8,
        display: "flex",
        width: "fit-content",
        height: "fit-content",
      },
      cardBtn: {
        marginTop: "auto",
        "& a": {
          color: "inherit",
          width: '100%',
          textDecoration: "inherit",
        },
      },
      chipWrap: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        "& > span:last-child": {
          marginBottom: 16,
        },
      },
    },
    [theme.breakpoints.down("sm")]: {},
    textInner: {
      '& > p': {
        margin: 0
      }
    }
  })
);

interface BccCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  text: any;
  bgColor?: string;
  btn: ButtonsProps[];
  variant: "horizontal" | "vertical";
  img: string;
  link?: boolean | false;
  fullImg?: boolean | false;
  chips: ChipsProps[] | [];
}

interface Color {
  [key: string]: 'primary' | 'secondary' | 'sale';
}

const BccCard = (props: BccCardProps) => {
  const classes = useStyles();
  const { title, btn, text, variant, img, chips } = props;
  const colors: Color = {
    '#27AE60': 'primary',
    '#4D565F': 'secondary',
    '#E3266A': 'sale'
  }
  return (
    <div
      className={`${classes.card} ${
        variant === "horizontal" ? classes.horizontal : ""
      }`}
    >
      {img && (
        <div
          className={classes.fullImg}
          style={{
            backgroundImage: `url(${encodeURI(img)})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: "cover",
            minHeight: 196,
          }}
        ></div>
      )}

      <div className={classes.contentCard}>
        {chips && chips.length > 0 && (
          <div className={classes.chipWrap}>
            {(chips as ChipsProps[]).map((c: ChipsProps) => 
                    <BccChip
                      className={classes.chip}
                      type={c.chip.type}
                      color={colors[c.chip.color.toUpperCase()] || 'primary'}
                    >
                      {c.chip.title}
                    </BccChip>
            )}
          </div>
        )}
        <BccTypography type="h5" block className={classes.title}>
          {title}
        </BccTypography>
        <BccTypography
          type="h5"
          block
          className={
            variant === "horizontal" ? classes.horizontalText : classes.text
          }
        >
          <span className={classes.textInner} dangerouslySetInnerHTML={{ __html: text }} />
        </BccTypography>
        {btn?.length > 0 &&
          btn.map((b: ButtonsProps, index: number) => (
            <BccButton
              variant={b.button.buttonType}
              fullWidth
              color={b.button.buttonColor}
              className={classes.cardBtn}
              style={{
                marginBottom: index === 0 && btn.length > 1 ? 12 : 0,
              }}
            >
              {b.button.buttonLink.startsWith("https://") ? (
                <BccLink
                  href={b.button.buttonLink}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  {b.button.buttonText}
                </BccLink>
              ) : (
                <Link href={b.button.buttonLink !== undefined ? `${b.button.buttonLink}` : ""}>
                  {b.button.buttonText}
                </Link>
              )}
            </BccButton>
          ))}
      </div>
    </div>
  );
};

export default BccCard;
