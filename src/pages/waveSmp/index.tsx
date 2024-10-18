import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box } from "@mui/material";
import styles from "../LandingPage/index.module.css";
import MainBanner from "@site/src/components/MainBanner";

export default function WaveSMPLandingPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <MainBanner />
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{'WaveSMP'}</h1>
          <Box sx={{ display: "flex" }}>
            <Box m="auto">
              <img src="waveSMP/gazing.png" loading="lazy" />
            </Box>
          </Box>
          <p className="hero__subtitle">{'A collaborative Minecraft experience'}</p>
        </div>
      </header>
    </Layout>
  );
}
