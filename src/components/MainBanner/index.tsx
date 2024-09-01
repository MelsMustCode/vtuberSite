import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Box } from "@mui/material";
import styles from './styles.module.css';

export default function MainBanner(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <div className="flex flex-col items-center justify-center py-3">
    //   <p className="text-[50px] font-semibold">iPhone 14</p>
    //   <p className="font-thin text-lg">With awesome quality and performance</p>
    //   <div className="flex flex-row gap-3 py-3">

    //   </div>
    //   <img src="waveSMP/gazing.png" alt="Main banner" className="w-[800px]" />
    // </div>
    <div className={styles.container}>
        <img src="waveSMP/gazing.png" alt="Main banner" style={{width:'100%'}} />
        <div className={styles.topRight}>WaveSMP</div>
        <div className={styles.bottomRight}>A collaborative Minecraft experience</div>
    </div>
  );
}
