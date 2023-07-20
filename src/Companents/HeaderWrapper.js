import React, { lazy, Suspense } from 'react';
import '../Css/header.css';


const Header = lazy(() => import('./Header'));

function HeaderWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
    </Suspense>
  );
}

export default HeaderWrapper;
