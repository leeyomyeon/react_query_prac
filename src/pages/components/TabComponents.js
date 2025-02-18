import React, { lazy, Suspense } from 'react';

const TabComponents = ({ location, fileName }) => {
  const Component = lazy(() => import(`../${location}`).then((contents) => {
    return contents;
  }));

  return (
    <Suspense fallback={<div></div>}>
      <Component name={fileName} />
    </Suspense>
  )
}

export default React.memo(TabComponents);