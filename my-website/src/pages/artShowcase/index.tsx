import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TitlebarImageList from '@site/src/components/ImageList';

export default function ArtShowcase(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Art Showcase | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <TitlebarImageList />
      </main>
    </Layout>
  );
}
