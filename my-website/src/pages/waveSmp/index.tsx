import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function ArtShowcase(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`WaveSMP | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        {/* <WaveSMPLandingPage /> */}
      </main>
    </Layout>
  );
}
