import Layout from "../../components/Layout";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import { FaqProps, FaqsProps, FaqCatProps } from "../../interfaces";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  BccTypography,
  BccInput,
  BccCollapseTitle,
  BccCollapsePanel,
  BccCollapseDetails,
} from "../../components/BccComponents";
import api from "../../api/Api";

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
        maxWidth: 1280,
        boxSizing: "border-box",
        margin: "0 auto",
        alignItems: "center",
        display: "flex",
        padding: "24px 48px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        padding: "32px 48px 128px",
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 360,
        margin: 0,
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      contents: {
        position: "relative",
        margin: "0 auto",
        padding: "84px 24px 32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      outerContent: {
        width: "100%",
        backgroundColor: "white",
      },
      tabsBranch: {
        maxWidth: 1280,
        boxSizing: "border-box",
        margin: "0 auto",
        alignItems: "center",
        display: "flex",
        padding: "24px",
      },
      tab: { position: "relative", bottom: -1 },
      city: {
        color: "#4D565F",
        borderBottom: "1px dashed #4D565F",
      },
      switch: { color: "#B3B6BA" },
      active: { color: "#27AE60" },
      mapContainer: {
        padding: "32px 24px",
        position: "relative",
        margin: "0 auto",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      input: {
        minWidth: 'auto',
        margin: 0,
      },
      table: {
        "& tr > td": {
          padding: "20px 0",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

const FaqPage = () => {
  const classes = useStyles({});
  const [faqCategory, setFaqCategory] = React.useState(0);
  const [faqs, setFaqs] = React.useState<FaqProps[] | []>([]);
  React.useEffect(() => {
    api.main.getFaq().then((res: FaqProps[]) => {
      setFaqs(res);
    });
  }, []);

  return (
    <Layout title="Business">
      <div className="main-page">
        <div className="container">
          <div className={classes.outerContent}>
            <div className={classes.contents}>
              <BccTypography type="h1" block>
                Часто задаваемые вопросы
              </BccTypography>
            </div>
          </div>
          <div className={classes.tabsBranch}>
            <BccTypography type="p1" mr="24px">
              Раздел
            </BccTypography>
            <BccInput
              id="faqcat"
              name="faqcat"
              value={faqCategory}
              onChange={(e: any) => e.target.value && setFaqCategory(e.target.value)}
              variant="outlined"
              className={classes.input}
              margin="normal"
              select
            >
              {faqs.length > 0 &&
                (faqs as FaqProps[]).map(
                  (faq: FaqProps, index: number) => <MenuItem value={index}>{faq.name}</MenuItem>)
              }
            </BccInput>
          </div>
          <div className={classes.outerContent}>
            <div className={classes.mapContainer}>
              {faqs[faqCategory] &&
                faqs[faqCategory].subcategories.length > 0 &&
                faqs[faqCategory].subcategories.map((f: FaqCatProps) => (
                  <BccCollapsePanel>
                    <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                      <BccTypography type="p2">{f.name}</BccTypography>
                    </BccCollapseTitle>
                    <BccCollapseDetails style={{ display: 'block' }}>
                    {f.faqs.length > 0 &&
                    f.faqs.map((f: FaqsProps) => (
                      <BccCollapsePanel>
                        <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                          <BccTypography type="p2">{f.question}</BccTypography>
                        </BccCollapseTitle>
                        <BccCollapseDetails>
                          <BccTypography type="p2">
                            <span dangerouslySetInnerHTML={{ __html: f.answer}} />
                          </BccTypography>
                        </BccCollapseDetails>
                      </BccCollapsePanel>
                    ))}
                    </BccCollapseDetails>
                  </BccCollapsePanel>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default FaqPage;
