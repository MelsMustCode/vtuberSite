import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

import { Avatar, Box } from "@mui/material";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const LandingPage = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <Box sx={{ display: "flex" }}>
          <Box m="auto">
            <Avatar
              alt="MelsMustScream"
              src={useBaseUrl(siteConfig.favicon)}
              sx={{ width: 150, height: 150, m: 2 }}
            />
          </Box>
        </Box>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
};
