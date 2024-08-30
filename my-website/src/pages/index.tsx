import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TitlebarImageList from '../components/ImageList';

import styles from './index.module.css';

// this here is the main website we see on landing 
export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <TitlebarImageList />
      </main>
    </Layout>
  );
}
