import React from "react";
import { BccTypography, BccTabs, BccTab, BccTableContainer, BccTable, BccTableRow, BccTableBody, BccTableCell } from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { TabsProps, TabProps, FileProps, fileURL } from "../interfaces";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("lg", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#00A755",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
      tabs: {
        marginTop: 40,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#00A755",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "3px solid #B9B9B9",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      innerContainer: {
        padding: 20,
      },
    },
  })
);

interface TabsComponentProps {
  tabs: TabsProps[];
}

const Tabs = (props: TabsComponentProps) => {
  const { tabs } = props
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: tabs && tabs.length > 0 ? tabs[0].color : "white" }}
    >
      <div className={classes.innerContainer}>
        {
          tabs && tabs.length > 0 && (
            <>
              <BccTypography type="h2" block mb="30px">
                {tabs[0].title}
              </BccTypography>
      
              <BccTabs
                value={index}
                onChange={(e: any, i: number) => {
                  console.log(e)
                  setIndex(i);
                }}
                className={classes.tab}
              >
                {tabs[0].tabs &&
                  tabs[0].tabs.map((t: TabProps) => {
                    return <BccTab key={t.id} label={t.title} />;
                  })}
              </BccTabs>
              {tabs[0].tabs[index].content !== "" && (<div
                className={classes.tabs}
                dangerouslySetInnerHTML={{ __html: tabs[0].tabs[index] && tabs[0].tabs[index].content }}
              />)}
              <BccTableContainer>
                <BccTable className={classes.table}>
                  <BccTableBody>
                    {
                      tabs[0].tabs[index] && tabs[0].tabs[index].files && 
                      tabs[0].tabs[index].files.length > 0 && (tabs[0].tabs[index].files as FileProps[]).map((n: FileProps) => (
                        <BccTableRow>
                          <BccTableCell>
                            <BccTypography
                              type="p4"
                              color="#B3B6BA"
                              block
                              mt="4px"
                              mb="12px"
                            >
                              Обновлено: {new Date(n.updateDate).toLocaleString().substring(0, 17).replace(/,/, '') }
                            </BccTypography>
                            <BccTypography
                              type="p2"
                              block
                              mb="12px"
                              weight="medium"
                              className={classes.link}
                              onClick={() => window.open(`${fileURL}${encodeURIComponent(n.fileName)}`, '_blank')}
                            >
                              <img src="/img/pdf_w.svg" alt="pdf" />{n.title}
                            </BccTypography>
                          </BccTableCell>
                        </BccTableRow>
                      ))
                    }
                  </BccTableBody>
                </BccTable>
              </BccTableContainer>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Tabs;
