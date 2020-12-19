import React, { lazy, Suspense } from 'react'
import { GoodsProvider } from 'goods-core'
import { kitabisaTheme } from '@kitabisa/assets/styles'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@kitabisa/pages/home'))

const App = () => (
  <Suspense fallback=''>
    <GoodsProvider theme={kitabisaTheme}>
      <Home />
    </GoodsProvider>
  </Suspense>
)

export default App