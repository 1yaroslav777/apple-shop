import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeletons = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={430}
      viewBox="0 0 300 430"
      backgroundColor="#adadad"
      foregroundColor="#ecebeb">
      <rect x="39" y="313" rx="15" ry="15" width="181" height="21" />
      <rect x="17" y="341" rx="10" ry="10" width="227" height="31" />
      <rect x="14" y="386" rx="10" ry="10" width="107" height="30" />
      <rect x="45" y="63" rx="20" ry="20" width="174" height="238" />
      <rect x="132" y="384" rx="20" ry="20" width="120" height="36" />
    </ContentLoader>
  );
};

export default Skeletons;
