import React, { lazy, Suspense } from 'react'
const LazyComp = lazy(() => import('./LazyComp'))


function Lazyload() {
  return (
    <>
      <div>Lazyload Example</div>
      <Suspense fallback='<div>...loading</div>'>
        <LazyComp />
      </Suspense>
    </>
  )
}

export default Lazyload