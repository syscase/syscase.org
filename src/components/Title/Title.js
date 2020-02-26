import Helmet from 'react-helmet';
import React from 'react';

const defaultDescription = 'Default Description';

type Props = {
  title: string,
  description: string,
  url: string,
};

const Title = ({title, description, url}: Props) => {
  return (
    <Helmet title={title}>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta property="og:image" content="/favicon.png" />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
};

export default Title;
